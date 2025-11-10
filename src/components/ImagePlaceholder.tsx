interface ImagePlaceholderProps {
  width: number;
  height: number;
  text: string;
}

export default function ImagePlaceholder({ width, height, text }: ImagePlaceholderProps) {
  return (
    <div 
      style={{
        width: '100%',
        height: `${height}px`,
        background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0.75rem',
        color: '#64748b',
        fontSize: '1.125rem',
        fontWeight: '600'
      }}
    >
      {text}
    </div>
  );
}
