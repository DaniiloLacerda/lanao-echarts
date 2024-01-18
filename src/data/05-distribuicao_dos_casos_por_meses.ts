

export const option5 = {
  title: {
    text: 'Distribuição de casos por meses',
    subtext: 'De agosto de 2022 até agosto de 2023'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Ago22', 'Set22', 'Out22', 'Nov22', 'Dez22', 'Jan23', 'Fev23', 'Mar23', 'Abr23', 'Mai23', 'Jun23', 'Jul23', 'Ago23']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Casos',
      type: 'line',
      stack: 'Total',
      smooth: false,
      lineStyle: {
        width: 1
      },
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#7b4397'
          },
          {
            offset: 1,
            color: 'rgb(1, 191, 236)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [10,10,12,14,12,7,10,17,8,6,14,23,25],
  
    }
  ]
};