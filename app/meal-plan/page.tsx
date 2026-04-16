'use client';

import { useState } from 'react';
import { recipes, type Recipe, type Category } from '@/lib/recipes';
import Link from 'next/link';

type MealSlot = 'breakfast' | 'lunch' | 'dinner' | 'snack';
type DayPlan = { [K in MealSlot]?: Recipe };
type WeekPlan = { [day: string]: DayPlan };

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const MEAL_SLOTS: { slot: MealSlot; label: string; icon: string; category: Category }[] = [
  { slot: 'breakfast', label: 'Breakfast', icon: '🌅', category: 'breakfast' },
  { slot: 'lunch', label: 'Lunch', icon: '🥗', category: 'lunch' },
  { slot: 'dinner', label: 'Dinner', icon: '🍽️', category: 'dinner' },
  { slot: 'snack', label: 'Snack', icon: '🥜', category: 'snacks' },
];

function emptyWeek(): WeekPlan {
  return Object.fromEntries(DAYS.map(d => [d, {}]));
}

function randomRecipeFor(category: Category, exclude?: string[]): Recipe | undefined {
  const pool = recipes.filter(r => r.category === category && !exclude?.includes(r.id));
  if (pool.length === 0) return undefined;
  return pool[Math.floor(Math.random() * pool.length)];
}

export default function MealPlanPage() {
  const [plan, setPlan] = useState<WeekPlan>(emptyWeek());
  const [mode, setMode] = useState<'week' | 'day'>('week');
  const [activeDay, setActiveDay] = useState('Monday');
  const [pickerOpen, setPickerOpen] = useState<{ day: string; slot: MealSlot } | null>(null);

  const setMeal = (day: string, slot: MealSlot, recipe: Recipe | undefined) => {
    setPlan(prev => ({ ...prev, [day]: { ...prev[day], [slot]: recipe } }));
    setPickerOpen(null);
  };

  const autoFillDay = (day: string) => {
    const used: string[] = [];
    const newDay: DayPlan = {};
    for (const { slot, category } of MEAL_SLOTS) {
      const r = randomRecipeFor(category, used);
      if (r) { newDay[slot] = r; used.push(r.id); }
    }
    setPlan(prev => ({ ...prev, [day]: newDay }));
  };

  const autoFillWeek = () => {
    const newPlan = emptyWeek();
    for (const day of DAYS) {
      const used: string[] = [];
      for (const { slot, category } of MEAL_SLOTS) {
        const r = randomRecipeFor(category, used);
        if (r) { newPlan[day][slot] = r; used.push(r.id); }
      }
    }
    setPlan(newPlan);
  };

  const totalNutrition = Object.values(plan).reduce((acc, day) => {
    Object.values(day).forEach((r: Recipe) => {
      acc.calories += r.nutrition.calories;
      acc.protein += r.nutrition.protein;
      acc.fibre += r.nutrition.fibre;
    });
    return acc;
  }, { calories: 0, protein: 0, fibre: 0 });

  const recipeCount = Object.values(plan).reduce((n, day) => n + Object.values(day).length, 0);

  const handlePrint = () => window.print();

  const uniqueRecipes = [...new Map(
    Object.values(plan).flatMap(d => Object.values(d)).map((r: Recipe) => [r.id, r])
  ).values()];

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px' }}>
      {/* Print header */}
      <div style={{ display: 'none' }} className="print-only">
        <div style={{ textAlign: 'center', marginBottom: 24, paddingBottom: 16, borderBottom: '2px solid #2d5a3d' }}>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: '#2d5a3d' }}>EPAVANCE · Weekly Meal Plan</h1>
          <p style={{ fontSize: 13, color: '#666' }}>Gut-Friendly Recipes · ibdrecipes.epavance.com</p>
        </div>
      </div>

      {/* Header */}
      <div className="no-print" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <Link href="/" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: 14, fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
            ← Back to Recipes
          </Link>
          <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0, color: 'var(--foreground)' }}>Meal Planner</h1>
          <p style={{ color: 'var(--muted)', fontSize: 15, marginTop: 6 }}>Build your weekly gut-friendly meal plan and download it as a PDF.</p>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button onClick={autoFillWeek} style={{ padding: '10px 18px', background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
            ✨ Auto-Fill Week
          </button>
          <button onClick={handlePrint} disabled={recipeCount === 0} style={{ padding: '10px 18px', background: recipeCount > 0 ? 'var(--accent)' : '#e5e7eb', color: recipeCount > 0 ? '#fff' : '#9ca3af', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: recipeCount > 0 ? 'pointer' : 'not-allowed' }}>
            🖨️ Print / Save PDF
          </button>
          <button onClick={() => setPlan(emptyWeek())} style={{ padding: '10px 18px', background: '#fff', color: '#ef4444', border: '1.5px solid #fee2e2', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
            🗑️ Clear
          </button>
        </div>
      </div>

      {/* Stats bar */}
      {recipeCount > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 28, padding: 20, background: '#edf4ef', borderRadius: 14 }}>
          {[
            { label: 'Meals planned', value: recipeCount.toString(), icon: '📋' },
            { label: 'Weekly calories', value: totalNutrition.calories.toLocaleString() + ' kcal', icon: '🔥' },
            { label: 'Weekly protein', value: totalNutrition.protein + 'g', icon: '💪' },
            { label: 'Weekly fibre', value: totalNutrition.fibre + 'g', icon: '🌾' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center', padding: '12px', background: '#fff', borderRadius: 10 }}>
              <div style={{ fontSize: 20 }}>{s.icon}</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--foreground)' }}>{s.value}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* View toggle */}
      <div className="no-print" style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        {(['week', 'day'] as const).map(v => (
          <button key={v} onClick={() => setMode(v)} style={{ padding: '8px 20px', borderRadius: 20, border: '1.5px solid', borderColor: mode === v ? 'var(--primary)' : 'var(--border)', background: mode === v ? 'var(--primary)' : '#fff', color: mode === v ? '#fff' : 'var(--foreground)', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
            {v === 'week' ? '📅 Week View' : '📆 Day View'}
          </button>
        ))}
        {mode === 'day' && (
          <select value={activeDay} onChange={e => setActiveDay(e.target.value)} style={{ padding: '8px 12px', borderRadius: 20, border: '1.5px solid var(--border)', fontSize: 13, cursor: 'pointer', background: '#fff' }}>
            {DAYS.map(d => <option key={d}>{d}</option>)}
          </select>
        )}
      </div>

      {/* Week grid */}
      {(mode === 'week' ? DAYS : [activeDay]).map(day => (
        <div key={day} className="recipe-print-card" style={{ marginBottom: 28, border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', background: 'var(--primary)', color: '#fff' }}>
            <h2 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>{day}</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              {Object.values(plan[day]).length > 0 && (
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>
                  {Object.values(plan[day]).reduce((n, r: Recipe) => n + r.nutrition.calories, 0)} kcal
                </span>
              )}
              <button onClick={() => autoFillDay(day)} className="no-print" style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                ✨ Auto-fill day
              </button>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 0 }}>
            {MEAL_SLOTS.map(({ slot, label, icon, category }) => {
              const recipe = plan[day][slot];
              return (
                <div key={slot} style={{ padding: 16, borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--muted)', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
                    {icon} {label}
                  </div>
                  {recipe ? (
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)', lineHeight: 1.3, marginBottom: 6 }}>
                        {recipe.name}
                      </div>
                      <div style={{ display: 'flex', gap: 8, fontSize: 12, color: 'var(--muted)', marginBottom: 10 }}>
                        <span>🔥 {recipe.nutrition.calories} kcal</span>
                        <span>⏱️ {recipe.prepTime + recipe.cookTime} min</span>
                      </div>
                      <div className="no-print" style={{ display: 'flex', gap: 8 }}>
                        <Link href={`/recipes/${recipe.id}`} style={{ fontSize: 12, color: 'var(--primary)', textDecoration: 'none', fontWeight: 500 }}>View recipe →</Link>
                        <button onClick={() => setPickerOpen({ day, slot })} style={{ fontSize: 12, color: 'var(--muted)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Change</button>
                        <button onClick={() => setMeal(day, slot, undefined)} style={{ fontSize: 12, color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>✕</button>
                      </div>
                    </div>
                  ) : (
                    <button
                      className="no-print"
                      onClick={() => setPickerOpen({ day, slot })}
                      style={{ width: '100%', padding: '12px', border: '2px dashed var(--border)', borderRadius: 10, background: 'var(--background)', color: 'var(--muted)', fontSize: 13, cursor: 'pointer', textAlign: 'center' }}
                    >
                      + Add {label}
                    </button>
                  )}
                  {!recipe && <div className="print-only" style={{ fontSize: 13, color: '#ccc', fontStyle: 'italic' }}>—</div>}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Recipe Picker Modal */}
      {pickerOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }} onClick={() => setPickerOpen(null)}>
          <div style={{ background: '#fff', borderRadius: 16, padding: 24, maxWidth: 560, width: '100%', maxHeight: '80vh', overflow: 'auto' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>
                Choose {MEAL_SLOTS.find(m => m.slot === pickerOpen.slot)?.label}
              </h3>
              <button onClick={() => setPickerOpen(null)} style={{ background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: 'var(--muted)' }}>✕</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {recipes
                .filter(r => r.category === MEAL_SLOTS.find(m => m.slot === pickerOpen.slot)?.category)
                .map(r => (
                  <button
                    key={r.id}
                    onClick={() => setMeal(pickerOpen.day, pickerOpen.slot, r)}
                    style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 10, cursor: 'pointer', background: '#fff', textAlign: 'left', transition: 'border-color 0.15s' }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                  >
                    <img src={r.image} alt={r.name} style={{ width: 56, height: 56, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)', marginBottom: 4 }}>{r.name}</div>
                      <div style={{ display: 'flex', gap: 10, fontSize: 12, color: 'var(--muted)' }}>
                        <span>🔥 {r.nutrition.calories} kcal</span>
                        <span>⏱️ {r.prepTime + r.cookTime} min</span>
                        <span>💪 {r.nutrition.protein}g protein</span>
                      </div>
                    </div>
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Print-only: full recipe list */}
      <div className="print-only" style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#2d5a3d', marginBottom: 20, paddingBottom: 10, borderBottom: '2px solid #2d5a3d' }}>
          Recipe Details
        </h2>
        {uniqueRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-print-card" style={{ marginBottom: 32, paddingBottom: 32, borderBottom: '1px solid #e5e7eb' }}>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>{recipe.name}</h3>
            <p style={{ fontSize: 13, color: '#666', marginBottom: 14 }}>{recipe.description}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: '#666', marginBottom: 10 }}>Ingredients</h4>
                {recipe.ingredients.map((g, gi) => (
                  <div key={gi}>
                    {g.section && <div style={{ fontSize: 12, fontWeight: 600, color: '#666', marginBottom: 4 }}>{g.section}</div>}
                    <ul style={{ margin: '0 0 12px', paddingLeft: 16 }}>
                      {g.items.map((item, ii) => <li key={ii} style={{ fontSize: 13, lineHeight: 1.6 }}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <div>
                <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: '#666', marginBottom: 10 }}>Method</h4>
                <ol style={{ margin: 0, paddingLeft: 18 }}>
                  {recipe.instructions.map((step, i) => <li key={i} style={{ fontSize: 13, lineHeight: 1.6, marginBottom: 6 }}>{step}</li>)}
                </ol>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 16, marginTop: 12, fontSize: 12, color: '#666' }}>
              <span>🔥 {recipe.nutrition.calories} kcal</span>
              <span>💪 {recipe.nutrition.protein}g protein</span>
              <span>🌾 {recipe.nutrition.fibre}g fibre</span>
              <span>⏱️ {recipe.prepTime + recipe.cookTime} min</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
