'use client';

import { useState, useMemo } from 'react';
import { recipes, CATEGORIES, filterRecipes, type Category } from '@/lib/recipes';
import RecipeCard from '@/components/RecipeCard';

const DIETARY_TAGS = ['Gluten-Free', 'Dairy-Free', 'Vegan-Friendly', 'Refined Sugar-Free'];
const NUTRITION_TAGS = ['High Protein', 'High Fibre', 'Omega-3 Rich', 'Nutrient-Dense'];
const STYLE_TAGS = ['Mediterranean-Style', 'Anti-Inflammatory Breakfast Smoothies', '5-Ingredient Meals for Busy Days'];

const TIME_OPTIONS = [
  { label: 'Any time', value: 0 },
  { label: '< 15 min', value: 15 },
  { label: '< 30 min', value: 30 },
  { label: '< 45 min', value: 45 },
];

export default function Home() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category | 'all'>('all');
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [maxTime, setMaxTime] = useState(0);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const results = useMemo(() => filterRecipes({
    query,
    category,
    tags: activeTags,
    maxPrepTime: maxTime || undefined,
  }), [query, category, activeTags, maxTime]);

  const toggleTag = (tag: string) =>
    setActiveTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);

  const clearAll = () => { setQuery(''); setCategory('all'); setActiveTags([]); setMaxTime(0); };
  const hasFilters = !!(query || category !== 'all' || activeTags.length || maxTime);

  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #1a3d2b 100%)', color: '#fff', padding: '56px 24px 48px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(200,151,58,0.2)', color: '#f0c96e', padding: '6px 16px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 20, border: '1px solid rgba(200,151,58,0.35)' }}>
            IBD-Friendly Eating
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2, letterSpacing: '-0.5px' }}>
            Gut-Friendly Recipes
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: 580, margin: '0 auto 32px' }}>
            Anti-inflammatory, whole-food recipes designed to nourish and support people living with IBD.
            Free from gluten, dairy, and refined sugars.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { icon: '🌱', label: `${recipes.length} Recipes` },
              { icon: '⚡', label: 'Quick to prepare' },
              { icon: '🍃', label: 'Whole food ingredients' },
              { icon: '💚', label: 'IBD-conscious' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: 20, fontSize: 14 }}>
                <span>{item.icon}</span>
                <span style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Search & Filters */}
      <section className="no-print" style={{ background: '#fff', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '14px 24px' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 200, position: 'relative' }}>
              <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', fontSize: 15, pointerEvents: 'none' }}>🔍</span>
              <input
                type="text"
                placeholder="Search recipes, ingredients, tags..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                style={{ width: '100%', padding: '9px 12px 9px 36px', borderRadius: 8, border: '1.5px solid var(--border)', fontSize: 14, outline: 'none', background: 'var(--background)' }}
              />
            </div>
            <button
              onClick={() => setFiltersOpen(v => !v)}
              style={{ padding: '9px 16px', borderRadius: 8, border: '1.5px solid var(--border)', background: filtersOpen || activeTags.length ? 'var(--primary)' : '#fff', color: filtersOpen || activeTags.length ? '#fff' : 'var(--foreground)', fontSize: 14, fontWeight: 500, cursor: 'pointer' }}
            >
              ⚙️ Filters {activeTags.length > 0 && `(${activeTags.length})`}
            </button>
            {hasFilters && (
              <button onClick={clearAll} style={{ padding: '9px 14px', borderRadius: 8, border: '1.5px solid #fee2e2', background: '#fff', color: '#ef4444', fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>
                ✕ Clear
              </button>
            )}
          </div>

          {/* Category pills */}
          <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <button key={cat.value} onClick={() => setCategory(cat.value)} style={{ padding: '5px 14px', borderRadius: 20, fontSize: 13, fontWeight: 500, cursor: 'pointer', border: '1.5px solid', borderColor: category === cat.value ? 'var(--primary)' : 'var(--border)', background: category === cat.value ? 'var(--primary)' : '#fff', color: category === cat.value ? '#fff' : 'var(--foreground)' }}>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Expanded filters */}
          {filtersOpen && (
            <div style={{ marginTop: 14, padding: 18, background: 'var(--background)', borderRadius: 10, border: '1px solid var(--border)' }}>
              {[
                { label: 'Dietary', tags: DIETARY_TAGS },
                { label: 'Nutritional', tags: NUTRITION_TAGS },
                { label: 'Style', tags: STYLE_TAGS },
              ].map(group => (
                <div key={group.label} style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.7px', marginBottom: 8 }}>{group.label}</div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {group.tags.map(tag => (
                      <button key={tag} onClick={() => toggleTag(tag)} style={{ padding: '6px 12px', borderRadius: 20, fontSize: 12, cursor: 'pointer', border: '1.5px solid', fontWeight: activeTags.includes(tag) ? 600 : 400, borderColor: activeTags.includes(tag) ? 'var(--primary)' : 'var(--border)', background: activeTags.includes(tag) ? '#edf4ef' : '#fff', color: activeTags.includes(tag) ? 'var(--primary)' : 'var(--foreground)' }}>
                        {activeTags.includes(tag) && '✓ '}{tag}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.7px', marginBottom: 8 }}>Total Time</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {TIME_OPTIONS.map(opt => (
                    <button key={opt.value} onClick={() => setMaxTime(opt.value)} style={{ padding: '6px 12px', borderRadius: 20, fontSize: 12, cursor: 'pointer', border: '1.5px solid', borderColor: maxTime === opt.value ? 'var(--accent)' : 'var(--border)', background: maxTime === opt.value ? '#fef9ec' : '#fff', color: maxTime === opt.value ? '#92600a' : 'var(--foreground)', fontWeight: maxTime === opt.value ? 600 : 400 }}>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Recipe Grid */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
          <h2 style={{ fontSize: 17, fontWeight: 600, color: 'var(--foreground)' }}>
            {results.length} recipe{results.length !== 1 ? 's' : ''}
            {category !== 'all' && <span style={{ color: 'var(--muted)', fontWeight: 400 }}> · {category.charAt(0).toUpperCase() + category.slice(1)}</span>}
          </h2>
          <a href="/meal-plan" style={{ background: 'var(--primary)', color: '#fff', padding: '9px 18px', borderRadius: 8, textDecoration: 'none', fontSize: 13, fontWeight: 600 }}>
            📅 Build Meal Plan
          </a>
        </div>

        {results.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 24px', color: 'var(--muted)' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🥗</div>
            <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: 'var(--foreground)' }}>No recipes found</p>
            <p style={{ fontSize: 14, marginBottom: 20 }}>Try adjusting your search or removing some filters</p>
            <button onClick={clearAll} style={{ padding: '10px 24px', background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600 }}>Clear All Filters</button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {results.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
          </div>
        )}
      </section>
    </div>
  );
}
