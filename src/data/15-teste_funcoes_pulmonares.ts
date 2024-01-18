export const option15 = {
  title: {
    text: "Resultado de testes de funções pulmonares com alterações.",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    containLabel: true,
  },
  xAxis: {
    type: "value",
    boundaryGap: [0, 0.01],
  },
  yAxis: {
    type: "category",
    data: [
      "DVO leve c/resposta ao BD",
      "DVO leve S/resposta ao BD",
      "DVO moderada c/resposta ao BD",
      "DVO misto c/resposta ao BD",
      "DVO misto s/resposta ao BD",      
      "Dificuldade na técnica",
      "DVO restritivo",
    ],
  },
  series: [
    {
      name: "Quantidade",
      type: "bar",
      data: [23, 12, 2, 1, 1, 8, 2],
      showBackground: true,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)",
      },
      label: {
        show: true
      }
    },
  ],
};
