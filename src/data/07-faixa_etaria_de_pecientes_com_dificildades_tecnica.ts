export const option7 = {
  title: {
    text: "Faixa etária de paciente que apresentaram dificuldades na técnica",
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
          value: 11,
          name: "Entre 6 e 12 anos",
          itemStyle: {
            color: "#43a047",
          },
        },
        {
          value: 3,
          name: "Acima de 12 anos",
          itemStyle: {
            color: "#1b5e20",
          },
        },
      ],
    },
  ],
};
