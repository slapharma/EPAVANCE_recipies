'use client';

import { Recipe } from '@/lib/recipes';
import Link from 'next/link';

const CATEGORY_ICONS: Record<string, string> = {
  breakfast: '🌅',
  lunch: '🥗',
  dinner: '🍽️',
  snacks: '🥜',
};

export default function RecipeDetailClient({ recipe }: { recipe: Recipe }) {
  const totalTime = recipe.prepTime + recipe.cookTime;

  const handlePrint = () => window.print();

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 24px' }}>
      {/* Back link */}
      <div className="no-print" style={{ marginBottom: 24 }}>
        <Link href="/" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: 14, fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          ← Back to Recipes
        </Link>
      </div>

      {/* Print header (only visible when printing) */}
      <div style={{ display: 'none' }} className="print-only">
        <div style={{ textAlign: 'center', marginBottom: 24, paddingBottom: 16, borderBottom: '2px solid #2d5a3d' }}>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: '#2d5a3d' }}>EPAVANCE · Gut-Friendly Recipes</h1>
        </div>
      </div>

      <div className="recipe-print-card">
        {/* Hero image */}
        <div style={{ borderRadius: 20, overflow: 'hidden', height: 380, marginBottom: 32, position: 'relative' }} className="no-print">
          <img src={recipe.image} alt={recipe.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }} />
          <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', color: '#fff', padding: '5px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 10 }}>
              {CATEGORY_ICONS[recipe.category]} {recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}
            </div>
            <h1 style={{ color: '#fff', fontSize: 'clamp(22px, 4vw, 34px)', fontWeight: 700, margin: 0, lineHeight: 1.2, textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
              {recipe.name}
            </h1>
          </div>
        </div>

        {/* Print-only title */}
        <h1 style={{ fontSize: 26, fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }} className="print-only">
          {CATEGORY_ICONS[recipe.category]} {recipe.name}
        </h1>

        {/* Description */}
        <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 28 }}>{recipe.description}</p>

        {/* Quick stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: 12, marginBottom: 32, padding: 20, background: '#edf4ef', borderRadius: 14 }}>
          {[
            { icon: '⏱️', label: 'Prep', value: `${recipe.prepTime} min` },
            { icon: '🔥', label: 'Cook', value: recipe.cookTime === 0 ? 'No cook' : `${recipe.cookTime} min` },
            { icon: '⌚', label: 'Total', value: totalTime === 0 ? 'No cook' : `${totalTime} min` },
            { icon: '👤', label: 'Serves', value: recipe.servingNote || `${recipe.servings}` },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center', padding: '12px 8px', background: '#fff', borderRadius: 10 }}>
              <div style={{ fontSize: 20, marginBottom: 4 }}>{stat.icon}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--foreground)' }}>{stat.value}</div>
              <div style={{ fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
          {recipe.tags.map(tag => (
            <span key={tag} style={{ fontSize: 13, fontWeight: 500, background: '#edf4ef', color: '#2d5a3d', padding: '5px 12px', borderRadius: 20, border: '1px solid #c6ddc9' }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 7fr)', gap: 40, marginBottom: 36 }}>
          {/* Ingredients */}
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--primary)', marginBottom: 20, paddingBottom: 10, borderBottom: '2px solid #edf4ef' }}>
              Ingredients
            </h2>
            {recipe.ingredients.map((group, gi) => (
              <div key={gi} style={{ marginBottom: 20 }}>
                {group.section && (
                  <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--muted)', marginBottom: 12 }}>
                    {group.section}
                  </h3>
                )}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {group.items.map((item, ii) => (
                    <li key={ii} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '7px 0', borderBottom: gi === recipe.ingredients.length - 1 && ii === group.items.length - 1 ? 'none' : '1px solid var(--border)', fontSize: 14, lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--primary)', marginBottom: 20, paddingBottom: 10, borderBottom: '2px solid #edf4ef' }}>
              Method
            </h2>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {recipe.instructions.map((step, i) => (
                <li key={i} style={{ display: 'flex', gap: 16, marginBottom: 16, alignItems: 'flex-start' }}>
                  <span style={{ width: 28, height: 28, background: 'var(--primary)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, flexShrink: 0, marginTop: 1 }}>
                    {i + 1}
                  </span>
                  <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0, color: 'var(--foreground)' }}>{step}</p>
                </li>
              ))}
            </ol>

            {recipe.tip && (
              <div style={{ marginTop: 20, padding: '14px 16px', background: '#fff9ec', borderRadius: 10, borderLeft: '3px solid var(--accent)', fontSize: 14, lineHeight: 1.6, color: '#5a4020' }}>
                <strong>💡 Tip:</strong> {recipe.tip}
              </div>
            )}
            {recipe.servingSuggestion && (
              <div style={{ marginTop: 12, padding: '14px 16px', background: '#f0f7f3', borderRadius: 10, borderLeft: '3px solid var(--primary)', fontSize: 14, lineHeight: 1.6, color: '#1d4a2d' }}>
                <strong>🍽️ Serving:</strong> {recipe.servingSuggestion}
              </div>
            )}
          </div>
        </div>

        {/* Gut health note */}
        <div style={{ padding: '20px 24px', background: '#edf4ef', borderRadius: 14, marginBottom: 32, border: '1px solid #c6ddc9' }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--primary)', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            🌿 Why This Recipe Supports Gut Health
          </h3>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: '#1d4a2d', margin: 0 }}>{recipe.gutHealthNote}</p>
        </div>

        {/* Nutrition */}
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--primary)', marginBottom: 16 }}>
            Nutrition Per Serving
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
            {[
              { label: 'Calories', value: `${recipe.nutrition.calories}`, unit: 'kcal', color: '#fff8ec' },
              { label: 'Protein', value: `${recipe.nutrition.protein}`, unit: 'g', color: '#edf4ef' },
              { label: 'Carbs', value: `${recipe.nutrition.carbs}`, unit: 'g', color: '#f0f4ff' },
              { label: 'Fat', value: `${recipe.nutrition.fat}`, unit: 'g', color: '#fdf2f8' },
              { label: 'Fibre', value: `${recipe.nutrition.fibre}`, unit: 'g', color: '#f0faf4' },
            ].map(n => (
              <div key={n.label} style={{ textAlign: 'center', padding: '16px 8px', background: n.color, borderRadius: 12, border: '1px solid var(--border)' }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--foreground)' }}>{n.value}<span style={{ fontSize: 14, fontWeight: 500, color: 'var(--muted)' }}>{n.unit}</span></div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{n.label}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 10, fontStyle: 'italic' }}>
            Nutrition information is estimated and may vary depending on ingredient brands and portion sizes.
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="no-print" style={{ display: 'flex', gap: 12, marginTop: 40, flexWrap: 'wrap' }}>
        <button
          onClick={handlePrint}
          style={{ padding: '12px 24px', background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}
        >
          🖨️ Print / Save as PDF
        </button>
        <Link href="/meal-plan" style={{ padding: '12px 24px', background: 'var(--accent)', color: '#fff', borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          📅 Add to Meal Plan
        </Link>
        <Link href="/" style={{ padding: '12px 24px', background: '#fff', color: 'var(--foreground)', border: '1.5px solid var(--border)', borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          ← More Recipes
        </Link>
      </div>

      {/* Disclaimer */}
      <p style={{ marginTop: 32, fontSize: 12, color: 'var(--muted)', lineHeight: 1.6, borderTop: '1px solid var(--border)', paddingTop: 20 }}>
        These recipes are not intended as medical advice. Everyone with IBD responds differently to foods — always adapt based on your personal tolerances and consult your healthcare professional if you have dietary concerns.
      </p>
    </div>
  );
}
