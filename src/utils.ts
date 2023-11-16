export interface Label {
  name: string;
  x: number;
  y: number;
}

export const generateLabels = () => {
  const labels = [];
  for (let i = 0; i < 4; i++) {
    const label: Label = {
      name: `label ${i}`,
      x: 150 + Math.random() * 400,
      y: 150 + Math.random() * 400,
    };
    labels.push(label);
  }
  return labels;
};
