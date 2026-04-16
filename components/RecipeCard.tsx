import { Recipe } from '@/lib/recipes';
import Link from 'next/link';

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  breakfast: { bg: '#fff8ec', text: '#92600a' },
  lunch: { bg: '#edf4ef', text: '#2d5a3d' },
  dinner: { bg: '#f0f4ff', text: '#2d3d8a' },
  snacks: { bg: '#fdf2f8', text: '#7c3d8a' },
};

const CATEGORY_ICONS: Record<string, string> = {
  breakfast: '🌅',
  lunch: '🥗',
  dinner: '🍽️',
  snacks: '🥜',
};

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const cat = CATEGORY_COLORS[recipe.category];
  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <Link href={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <article style={{
        background: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        border: '1px solid var(--border)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
      }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)';
        }}
      >
        {/* Image */}
        <div style={{ position: 'relative', height: 200, overflow: 'hidden', flexShrink: 0 }}>
          <img
            src={recipe.image}
            alt={recipe.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            loading="lazy"
          />
          <div style={{
            position: 'absolute', top: 12, left: 12,
            background: cat.bg, color: cat.text,
            padding: '4px 10px', borderRadius: 20, fontSize: 12, fontWeight: 600,
            display: 'flex', alignItems: 'center', gap: 4,
            backdropFilter: 'blur(4px)',
            boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
          }}>
            <span>{CATEGORY_ICONS[recipe.category]}</span>
            {recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '18px 18px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.3, color: 'var(--foreground)', margin: 0 }}>
            {recipe.name}
          </h3>
          <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5, margin: 0, flex: 1 }}>
            {recipe.description}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {recipe.tags.slice(0, 3).map(tag => (
              <span key={tag} style={{ fontSize: 11, fontWeight: 500, background: '#edf4ef', color: '#2d5a3d', padding: '3px 9px', borderRadius: 20 }}>
                {tag}
              </span>
            ))}
            {recipe.tags.length > 3 && (
              <span style={{ fontSize: 11, color: 'var(--muted)', padding: '3px 9px' }}>+{recipe.tags.length - 3} more</span>
            )}
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 16, paddingTop: 10, borderTop: '1px solid var(--border)' }}>
            <Stat icon="⏱️" value={totalTime === 0 ? 'No cook' : `${totalTime} min`} label="Total" />
            <Stat icon="👤" value={`${recipe.servings}`} label={recipe.servingNote || 'serving' + (recipe.servings !== 1 ? 's' : '')} />
            <Stat icon="🔥" value={`${recipe.nutrition.calories}`} label="kcal" />
            <Stat icon="💪" value={`${recipe.nutrition.protein}g`} label="protein" />
          </div>
        </div>
      </article>
    </Link>
  );
}

function Stat({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <div style={{ textAlign: 'center', flex: 1 }}>
      <div style={{ fontSize: 14 }}>{icon}</div>
      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--foreground)', lineHeight: 1.2 }}>{value}</div>
      <div style={{ fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.3px' }}>{label}</div>
    </div>
  );
}
