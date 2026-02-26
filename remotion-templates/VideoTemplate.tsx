import {useCurrentFrame, interpolate, AbsoluteFill, spring, useVideoConfig} from 'remotion';

// Pulse Graphix "3 Tips" Video Template
// Usage: Change the tips array to create new videos

interface Tip {
  emoji: string;
  text: string;
  color: string;
}

const TIPS: Tip[] = [
  {emoji: '🐢', text: 'SLOW LOAD TIMES', color: '#E74C3C'},
  {emoji: '📱', text: 'Cluttered Design', color: '#3498DB'},
  {emoji: '🔘', text: 'Missing CTA', color: '#27AE60'},
];

const VideoTemplate: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  
  // Progress through video (0 to 1)
  const progress = frame / durationInFrames;
  
  // Intro animation (first 1 second)
  const introText = interpolate(
    frame,
    [0, 30],
    [100, 0],
    {extrapolateRight: 'clamp'}
  );
  
  // Which tip to show
  const currentTip = Math.floor((frame - 60) / 90);
  
  return (
    <AbsoluteFill style={{
      backgroundColor: '#1A1A2E',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Inter, sans-serif',
    }}>
      {/* HEADER */}
      <div style={{
        position: 'absolute',
        top: 60,
        width: '100%',
        textAlign: 'center',
      }}>
        {frame < 60 && (
          <>
            <h1 style={{
              opacity: interpolate(frame, [0, 30], [0, 1]),
              transform: `translateY(${interpolate(frame, [0, 30], [20, 0])}px)`,
              color: '#FF6B35',
              fontSize: 72,
              fontWeight: 800,
              marginBottom: 20,
              textTransform: 'uppercase',
            }}>
              3 WEBSITE KILLERS
            </h1>
            <p style={{
              opacity: interpolate(frame, [20, 50], [0, 1]),
              color: 'white',
              fontSize: 40,
            }}>
              costing you customers
            </p>
          </>
        )}
      </div>
      
      {/* TIPS SEQUENCE */}
      {frame >= 60 && currentTip < TIPS.length && (
        <TipCard
          emoji={TIPS[currentTip].emoji}
          text={TIPS[currentTip].text}
          color={TIPS[currentTip].color}
          frame={frame - (60 + currentTip * 90)}
          number={currentTip + 1}
        />
      )}
      
      {/* OUTRO */}
      {frame > 330 && (
        <Outro frame={frame - 330} />
      )}
    </AbsoluteFill>
  );
};

const TipCard: React.FC<{emoji: string; text: string; color: string; frame: number; number: number}> = ({
  emoji, text, color, frame, number
}) => {
  const scale = spring({frame, fps: 30, config: {damping: 12}});
  
  return (
    <div style={{
      transform: `scale(${scale})`,
      opacity: interpolate(frame, [0, 10, 80, 90], [0, 1, 1, 0]),
      textAlign: 'center',
    }}>
      <div style={{
        fontSize: 120,
        marginBottom: 30,
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
      }}>
        {emoji}
      </div>
      <div style={{
        backgroundColor: color,
        padding: '20px 60px',
        borderRadius: 20,
        transform: `rotate(${interpolate(frame, [0, 90], [-3, 3])}deg)`,
      }}>
        <span style={{
          color: 'white',
          fontSize: 64,
          fontWeight: 800,
          textTransform: 'uppercase',
        }}>
          #{number} {text}
        </span>
      </div>
    </div>
  );
};

const Outro: React.FC<{frame: number}> = ({frame}) => {
  return (
    <div style={{
      opacity: interpolate(frame, [0, 15], [0, 1]),
      textAlign: 'center',
    }}>
      <p style={{
        color: '#FF6B35',
        fontSize: 48,
        fontWeight: 600,
        marginBottom: 30,
      }}>
        Need help fixing these?
      </p>
      <div style={{
        background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C5A 100%)',
        padding: '20px 50px',
        borderRadius: 50,
        marginBottom: 40,
      }}>
        <span style={{
          color: 'white',
          fontSize: 36,
          fontWeight: 700,
        }}>
          DM 'WEBSITE' FOR FREE AUDIT
        </span>
      </div>
      <p style={{color: '#888', fontSize: 24}}>
        @chiccomutombo | pulsegraphix.studio
      </p>
    </div>
  );
};

export default VideoTemplate;
