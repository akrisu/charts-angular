const defaultColor = '#eaeaea';
const borderColors = ['#1b7d9a', '#289a09', '#e4703a'];

export const getColors = (index: number) => borderColors[index] || defaultColor;
