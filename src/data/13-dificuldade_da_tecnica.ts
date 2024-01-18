export const option13 = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)",
  },
  title: {
    text: "Proporção de pacientes que tiverem dificuldades na técnica.",
    subtext: "Baseado na idade",
    left: "center",
  },
  series: [
    {
      name: "Por idade",
      type: "pie",
      selectedMode: "single",
      radius: [0, "30%"],
      center: ['50%', '45%'],
      label: {
        position: "inside",
        fontSize: 14,
        formatter: "{b}: {@value} ({d}%)",
      },
      data: [
        {
          value: 3,
          name: "Acima 12 a 18",
          itemStyle: {
            color: "#81c784",
          },
        },
        {
          value: 11,
          name: "De 06 a 12 anos",
          itemStyle: {
            color: "#1b5e20",
          },
        },
      ],
    },
    {
      name: "Apresentaram dificuldades",
      type: "pie",
      radius: ["45%", "60%"],
      center: ['50%', '45%'],
      labelLine: {
        length: 30,
      },
      label: {
        formatter: "{b|{b}：}{c}  {per|{d}%}  ",
        backgroundColor: "#F6F8FC",
        borderColor: "#8C8D8E",
        borderWidth: 1,
        borderRadius: 4,
         fontSize: 16,
        rich: {
          b: {
            color: "#4C5058",
            fontSize: 14,
            fontWeight: "bold",
            lineHeight: 33,
            padding: [3, 4],
          },
          per: {
            color: "#fff",
            backgroundColor: "#4C5058",
            padding: [3, 4],
            borderRadius: 4,
          },
        },
      },
      data: [
        {
          value: 154,
          name: "NÃO",
          itemStyle: {
            color: "#43a047",
          },
        },
        {
          value: 14,
          name: "SIM",
          itemStyle: {
            color: "#1b5e20",
          },
        },
      ],
    },
  ],
};
