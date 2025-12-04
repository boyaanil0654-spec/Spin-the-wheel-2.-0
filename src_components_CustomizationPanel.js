import React from 'react';
import { SketchPicker } from 'react-color';

const CustomizationPanel = ({ customize }) => {
  const [segments, setSegments] = React.useState([]);

  const addSegment = () => setSegments([...segments, { name: 'New', color: '#ff00ff', prob: 1 }]);
  const updateSegment = (i, key, val) => {
    const newSegs = [...segments];
    newSegs[i][key] = val;
    setSegments(newSegs);
    customize(newSegs); // Real-time update
  };

  return (
    <div className="panel glassmorphism">
      <h2>Customize Wheel</h2>
      {segments.map((seg, i) => (
        <div key={i} className="segment hologram-shimmer">
          <input value={seg.name} onChange={(e) => updateSegment(i, 'name', e.target.value)} />
          <SketchPicker color={seg.color} onChange={(c) => updateSegment(i, 'color', c.hex)} />
          <input type="number" value={seg.prob} onChange={(e) => updateSegment(i, 'prob', e.target.value)} />
        </div>
      ))}
      <button onClick={addSegment}>Add Segment</button>
    </div>
  );
};

export default CustomizationPanel;