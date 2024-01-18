export const option3 = {
  title: {
    text: "Classificação da gravidade do distúrbio",
    subtext: "baseado no Fef 25/75",
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
  grid: { top: "55%" },
  series: [
    {
      name: "Access From",
      type: "pie",
      id: "pie",
      radius: ["40%", "70%"],
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
      data: [
        {
          value: 29,
          name: "FEF 25/75 > 70",
          itemStyle: {
            color: "#142157",
          },
        },
        {
          value: 139,
          name: "FEF 25/75 > 70",
          itemStyle: {
            color: "#2898ee",
          },
        },
      ],
    },
  ],
};
