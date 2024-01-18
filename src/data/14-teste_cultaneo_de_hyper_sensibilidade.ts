export const option14 = {
  xAxis: {
    data: ["D. PTERYNYSSIMUS", "D. FARINAE", "B. TROPICALIS"],
  },
  yAxis: {
    type: "value",
  },
  title: {
    text: "Teste cutâneo de hyper sensibilidade imediata positiva para ácaros",
    left: "center",
  },
  series: [
    {
      name: "Quantidade",
      type: "bar",
      data: [89, 54, 36],
      label: {
        show: true,
        formatter: (params: any) => params.value,
        fontSize: 14,
        fontWeight: "bold",
      },
    },
  ],
};
