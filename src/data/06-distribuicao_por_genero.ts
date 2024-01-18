export const option6b = {
  tooltip: {},
  legend: {
    top: "5%",
    left: "center",
  },
  title: {
    text: "Distribuição por gênero",
  },
  series: [
    {
      type: "pie",
      center: ['50%', '50%'],
      radius: ["40%", "70%"],
      startAngle: 180,
      label: {
        formatter: "{b}: {@value} ({d}%)",
        fontSize: 14,
        fontWeight: "bold",
      },
      data: [
        { value: 96, name: "Masculino" },
        {
          value: 72,
          name: "Feminino",
          itemStyle: {
            color: "#F260B5",
          },
        },
      ],
    },
  ],
};

