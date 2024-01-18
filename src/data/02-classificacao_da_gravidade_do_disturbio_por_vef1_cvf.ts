export const option2 = {
  title: {
    text: "Classificação da gravidade do distúrbio",
    subtext: "baseado no VEF1/CVF",
    left: "center",
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: { show: true },
    },
  },
  tooltip: {
    trigger: "item",
  },
  dataset: {
    source: [
      ["product", "value"],
      ["VEF1/CVF > 90", 74],
      ["VEF1/CVF < 90", 94],
    ],
  },
  grid: { top: "55%" },
  series: [
    {
      name: "Access From",
      type: "pie",
      id: "pie",
      radius: "30%",
      center: ["50%", "25%"],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
      label: {
        formatter: "{b}: {@value} ({d}%)",
        fontSize: 14,
        fontWeight: "bold",
      },
    },
  ],
};
