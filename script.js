function mudarDashboard(tipo) {
    const iframe = document.getElementById("dashboardFrame");
  
    const urls = {
      geral: "https://app.powerbi.com/view?r=SEU-LINK-GERAL-AQUI",
      ranking: "https://app.powerbi.com/view?r=SEU-LINK-RANKING-AQUI",
      mapa: "https://app.powerbi.com/view?r=SEU-LINK-MAPA-AQUI"
    };
  
    iframe.src = urls[tipo];
  }
  