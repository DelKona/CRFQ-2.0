
            // création de la carte
            var map = L.map('map');
            // ajout des tuiles
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 20,
                minZoom: 6,
                attribution: 'Map data &copy; OpenStreetMap contributors'
            }).addTo(map);
            // définition des limites
            var southWest = L.latLng(43.035, -76.669); // coordonnées sud-ouest
            var northEast = L.latLng(47.368, -66.893); // coordonnées nord-est
            var bounds = L.latLngBounds(southWest, northEast); // limites de la carte
            // affectation des limites à la carte
            map.setMaxBounds(bounds);
            // configuration de la vue de la carte
            map.setView([46.1998153288181, -72.27754701711997], 8);
            var activeSidebar = null ;

            
 // creation des marqueurs 

            // Création du marqueur avec AwesomeMarker
            var blueMarker = L.AwesomeMarkers.icon({
              icon: 'info-circle',
              markerColor: 'blue'
            }); 

            var orangeMarker = L.AwesomeMarkers.icon({
              icon: 'info-circle',
              markerColor: 'orange'
            });

            var greenMarker = L.AwesomeMarkers.icon({
              icon: 'info-circle',
              markerColor: 'green'
            });

            var grayMarker = L.AwesomeMarkers.icon({
              icon: 'info-circle',
              markerColor: 'gray'
            });

            var redMarker = L.AwesomeMarkers.icon({
              icon: 'info-circle',
              markerColor: 'red'
            });

            // creation du marker kruger
            var sidebar1 = L.control.sidebar('sidebar1', {
                closeButton: true,
                position: 'left'
            });
            map.addControl(sidebar1);  setTimeout(function () {
                sidebar.show();
            }, 500);
            var marker1 = L.marker([46.32712853924076, -72.55789197099591],{icon: blueMarker}).addTo(map).on('click', function () {
              if (activeSidebar) {
              activeSidebar.hide();
              };
              sidebar1.show();
              activeSidebar = sidebar1
              marker1.on('click', function(e) {
                var latlng = e.latlng;
                map.setView(latlng, map.getZoom());
              })
            })
            .on('mouseover', function (e) {
                        marker1.bindTooltip("KRUGER", { direction: 'top', offset: [0, -30] }).openTooltip();
                    })
                    .on('mouseout', function (e) {
                        marker1.closeTooltip();
                    });
 // creation du marker white birch paper
 
            var sidebar2 = L.control.sidebar('sidebar2', {
                closeButton: true,
                position: 'left'
            });
            map.addControl(sidebar2); setTimeout(function () {
                sidebar.show();
            }, 500);

 var marker2 = L.marker([46.824253294303276, -71.21528147291784],{icon: blueMarker}).addTo(map).on('click', function () {
                if (activeSidebar) {
                  activeSidebar.hide();
                };
                sidebar2.show();
                activeSidebar = sidebar2
                marker2.on('click', function(e) {
                var latlng = e.latlng;
                map.setView(latlng, map.getZoom());
              })
            })
            .on('mouseover', function (e) {
                        marker2.bindTooltip("WHITE BIRCH PAPER", { direction: 'top', offset: [0, -30] }).openTooltip();
                    })
                    .on('mouseout', function (e) {
                        marker2.closeTooltip();
                    });
 // creation du marker AMD
            var sidebar3 = L.control.sidebar('sidebar3', {
                closeButton: true,
                position: 'left'
            });
            map.addControl(sidebar3); setTimeout(function () {
                sidebar.show();
            }, 500);
            var marker3 = L.marker([45.4014173503414, -73.51336444311102],{icon: greenMarker}).addTo(map).on('click', function () {
                if (activeSidebar) {
                  activeSidebar.hide();
                };
                sidebar3.show();
                activeSidebar = sidebar3
                marker3.on('click', function(e) {
                var latlng = e.latlng;
                map.setView(latlng, map.getZoom());
              })
            })
            .on('mouseover', function (e) {
                        marker3.bindTooltip("AMD", { direction: 'top', offset: [0, -30] }).openTooltip();
                    })
                    .on('mouseout', function (e) {
                        marker3.closeTooltip();
                    });
 // creation du marker Brasserie 11 COMTE
            var sidebar4 = L.control.sidebar('sidebar4', {
                closeButton: true,
                position: 'left'
            });
            map.addControl(sidebar4); setTimeout(function () {
                sidebar.show();
            }, 500);
            var marker4 = L.marker([45.40973271759694, -71.63431552507997],{icon: greenMarker}).addTo(map).on('click', function () {
                if (activeSidebar)  {
                activeSidebar.hide();
                };
                sidebar4.show();
                activeSidebar =  sidebar4
                marker4.on('click', function(e) {
                var latlng = e.latlng;
                map.setView(latlng, map.getZoom());
              })
            })
            .on('mouseover', function (e) {
                        marker4.bindTooltip("BRASSERIE 11 COMTE", { direction: 'top', offset: [0, -30] }).openTooltip();
                    })
                    .on('mouseout', function (e) {
                        marker4.closeTooltip();
                    });
 // creation du marker MIELLERIE KING
            var sidebar5 = L.control.sidebar('sidebar5', {
                closeButton: true,
                position: 'left'
            });
            map.addControl(sidebar5); setTimeout(function () {
                sidebar.show();
            }, 500);
            var marker5 = L.marker([45.86026194254494, -72.06412611347719],{icon: greenMarker}).addTo(map).on('click', function () {
                if (activeSidebar){
                  activeSidebar.hide();
                };
                sidebar5.show();
                activeSidebar =  sidebar5
                marker5.on('click', function(e) {
                var latlng = e.latlng;
                map.setView(latlng, map.getZoom());
              })
            })
            .on('mouseover', function (e) {
                        marker5.bindTooltip("MIELLERIE KING", { direction: 'top', offset: [0, -30] }).openTooltip();
                    })
                    .on('mouseout', function (e) {
                        marker5.closeTooltip();
                    });
 // creation du marker LOOP MISSION
            var sidebar6 = L.control.sidebar('sidebar6', {
                closeButton: true,
                position: 'left'
            });
            map.addControl(sidebar6); setTimeout(function () {
                sidebar.show();
            }, 500);
            var marker6 = L.marker([45.54203799082499, -73.6167856103941],{icon: greenMarker}).addTo(map).on('click', function () {
                if (activeSidebar){
                  activeSidebar.hide();
                };
                sidebar6.show();
                activeSidebar = sidebar6
                marker6.on('click', function(e) {
                var latlng = e.latlng;
                map.setView(latlng, map.getZoom());
              })
            })
            .on('mouseover', function (e) {
                        marker6.bindTooltip("LOOP MISSION", { direction: 'top', offset: [0, -30] }).openTooltip();
                    })
                    .on('mouseout', function (e) {
                        marker6.closeTooltip();
                    });
 // creation du marker VIRENTIA
            var sidebar7 = L.control.sidebar('sidebar7', {
                closeButton: true,
                position: 'left'
            });
            map.addControl(sidebar7); setTimeout(function () {
                sidebar.show();
            }, 500);
            var marker7 = L.marker([46.37372845945292, -72.39400524705349],{icon: greenMarker}).addTo(map).on('click', function () {
                if(activeSidebar) {
                  activeSidebar.hide();
                };
                sidebar7.show();
                activeSidebar = sidebar7
                marker7.on('click', function(e) {
                var latlng = e.latlng;
                map.setView(latlng, map.getZoom());
              })
            })
            .on('mouseover', function (e) {
                        marker7.bindTooltip("VIRENTIA", { direction: 'top', offset: [0, -30] }).openTooltip();
                    })
                    .on('mouseout', function (e) {
                        marker7.closeTooltip();
                    });
 // creation du marker ROTHSAY OIL
            var sidebar8 = L.control.sidebar('sidebar8', {
                closeButton: true,
                position: 'left'
            });
            map.addControl(sidebar8); setTimeout(function () {
                sidebar.show();
            }, 500);
            var marker8 = L.marker([45.40581599807351, -73.5866791560598],{icon: orangeMarker}).addTo(map).on('click', function () {
                if(activeSidebar) {
                  activeSidebar.hide();
                  };
                  sidebar8.show();
                  activeSidebar = sidebar8
                  marker8.on('click', function(e) {
                var latlng = e.latlng;
                map.setView(latlng, map.getZoom());
              })
            })
            .on('mouseover', function (e) {
                        marker8.bindTooltip("ROTHSAY OIL", { direction: 'top', offset: [0, -30] }).openTooltip();
                    })
                    .on('mouseout', function (e) {
                        marker8.closeTooltip();
                    });
 // creation du marker GREEN OIL
            var sidebar9 = L.control.sidebar('sidebar9', {
                closeButton: true,
                position: 'left'
            });
            map.addControl(sidebar9); setTimeout(function () {
                sidebar.show();
            }, 500);
            var marker9 = L.marker([46.87895944286916, -71.19015101564432],{icon: orangeMarker}).addTo(map).on('click', function () {
                if (activeSidebar)  {
                  activeSidebar.hide();
                  };
                  sidebar9.show();
                  activeSidebar = sidebar9
                  marker9.on('click', function(e) {
                var latlng = e.latlng;
                map.setView(latlng, map.getZoom());
              })
            })
            .on('mouseover', function (e) {
                        marker9.bindTooltip("GREEN OIL", { direction: 'top', offset: [0, -30] }).openTooltip();
                    })
                    .on('mouseout', function (e) {
                        marker9.closeTooltip();
                    });
 // creation du marker BIOCARDEL
            var sidebar10 = L.control.sidebar('sidebar10', {
                closeButton: true,
                position: 'left'
            });
            map.addControl(sidebar10); setTimeout(function () {
                sidebar.show();
            }, 500);
            var marker10 = L.marker([45.663527266382346, -72.12376869858149],{icon: orangeMarker}).addTo(map).on('click', function () {
                if (activeSidebar) {
                  activeSidebar.hide();
                };
                sidebar10.show();
                activeSidebar = sidebar10
                marker10.on('click', function(e) {
                var latlng = e.latlng;
                map.setView(latlng, map.getZoom());
              })
            })
            .on('mouseover', function (e) {
                        marker10.bindTooltip("BIOCARDEL OIL", { direction: 'top', offset: [0, -30] }).openTooltip();
                    })
                    .on('mouseout', function (e) {
                        marker10.closeTooltip();
                    });
 // creation du marker APCQ
            var sidebar11 = L.control.sidebar('sidebar11', {
                closeButton: true,
                position: 'left'
            });
            map.addControl(sidebar11); setTimeout(function () {
                sidebar.show();
            }, 500);
            var marker11 = L.marker([46.33329241781883, -71.81943948530345],{icon: redMarker}).addTo(map).on('click', function () {
                if (activeSidebar) {
                  activeSidebar.hide();
                  };
                  sidebar11.show();
                  activeSidebar =  sidebar11
                  marker11.on('click', function(e) {
                  var latlng = e.latlng;
                  map.setView(latlng, map.getZoom());
              })
            })
            .on('mouseover', function (e) {
                        marker11.bindTooltip("APCQ", { direction: 'top', offset: [0, -30] }).openTooltip();
                    })
                    .on('mouseout', function (e) {
                        marker11.closeTooltip();
                    });
 // creation du marker SEMICAN
            var sidebar12 = L.control.sidebar('sidebar12', {
              closeButton: true,
              position: 'left'
            });
            map.addControl(sidebar12);
            var marker12 = L.marker([46.22076887675749, -71.72478488097865],{icon: greenMarker}).addTo(map).on('click', function () {
                if (activeSidebar) {
                  activeSidebar.hide();
                };
                sidebar12.show();
                activeSidebar =  sidebar12
                marker1.on('click', function(e) {
                var latlng = e.latlng;
                map.setView(latlng, map.getZoom());
              })
            })
            .on('mouseover', function (e) {
                        marker12.bindTooltip("SEMICAN", { direction: 'top', offset: [0, -30] }).openTooltip();
                    })
                    .on('mouseout', function (e) {
                        marker12.closeTooltip();
                    });

 // creation du marker Fromagerie les rivières
 var sidebar13 = L.control.sidebar('sidebar13', {
              closeButton: true,
              position: 'left'
            });
            map.addControl(sidebar13);
            var marker13 = L.marker([46.850482222146624, -71.30897089392886],{icon: grayMarker}).addTo(map).on('click', function () {
                if (activeSidebar) {
                  activeSidebar.hide();
                };
                sidebar13.show();
                activeSidebar =  sidebar13
                marker1.on('click', function(e) {
                var latlng = e.latlng;
                map.setView(latlng, map.getZoom());
              })
            })
            .on('mouseover', function (e) {
                        marker13.bindTooltip("FROMAGÉRIE LES RIVIÈRES", { direction: 'top', offset: [0, -30] }).openTooltip();
                    })
                    .on('mouseout', function (e) {
                        marker13.closeTooltip();
                    });

 // creation du marker Maison Riviera
 var sidebar14 = L.control.sidebar('sidebar14', {
              closeButton: true,
              position: 'left'
            });
            map.addControl(sidebar14);
            var marker14 = L.marker([46.02692568897166, -73.07944325286167],{icon: grayMarker}).addTo(map).on('click', function () {
                if (activeSidebar) {
                  activeSidebar.hide();
                };
                sidebar14.show();
                activeSidebar =  sidebar14
                marker1.on('click', function(e) {
                var latlng = e.latlng;
                map.setView(latlng, map.getZoom());
              })
            })
            .on('mouseover', function (e) {
                        marker14.bindTooltip("MAISON RIVIÉRA", { direction: 'top', offset: [0, -30] }).openTooltip();
                    })
                    .on('mouseout', function (e) {
                        marker14.closeTooltip();
                    });
;

 // creation du marker de PPAQ
 var sidebar15 = L.control.sidebar('sidebar15', {
              closeButton: true,
              position: 'left'
            });
            map.addControl(sidebar15);
            var marker15 = L.marker([45.54548984148034, -73.49095283263055],{icon: redMarker}).addTo(map)
            .on('click', function () {
                if (activeSidebar) {
                  activeSidebar.hide();
                };
                sidebar15.show();
                activeSidebar =  sidebar15
                marker1.on('click', function(e) {
                var latlng = e.latlng;
                map.setView(latlng, map.getZoom());
              })
            })
            .on('mouseover', function (e) {
                        marker15.bindTooltip("PPAQ", { direction: 'top', offset: [0, -30] }).openTooltip();
                    })
                    .on('mouseout', function (e) {
                        marker15.closeTooltip();
                    });


// creation du marker de AGROPUR
var sidebar16 = L.control.sidebar('sidebar16', {
    closeButton: true,
    position: 'left'
  });
  map.addControl(sidebar16);
  var marker16 = L.marker([46.83400743625701, -71.24226052442627],{icon: grayMarker}).addTo(map)
  .on('click', function () {
      if (activeSidebar) {
        activeSidebar.hide();
      };
      sidebar16.show();
      activeSidebar =  sidebar16
      marker1.on('click', function(e) {
      var latlng = e.latlng;
      map.setView(latlng, map.getZoom());
    })
  })
  .on('mouseover', function (e) {
              marker16.bindTooltip("AGROPUR", { direction: 'top', offset: [0, -30] }).openTooltip();
          })
          .on('mouseout', function (e) {
              marker16.closeTooltip();
          });


// creation du marker de BOULANGERIE St-Donat
var sidebar17 = L.control.sidebar('sidebar17', {
    closeButton: true,
    position: 'left'
  });
  map.addControl(sidebar17);
  var marker17 = L.marker([46.30552551316315, -74.204578684106],{icon: greenMarker}).addTo(map)
  .on('click', function () {
      if (activeSidebar) {
        activeSidebar.hide();
      };
      sidebar17.show();
      activeSidebar =  sidebar17
      marker1.on('click', function(e) {
      var latlng = e.latlng;
      map.setView(latlng, map.getZoom());
    })
  })
  .on('mouseover', function (e) {
              marker17.bindTooltip("BOULANGERIE St-DONAT", { direction: 'top', offset: [0, -30] }).openTooltip();
          })
          .on('mouseout', function (e) {
              marker17.closeTooltip();
          });


          // creation du marker de ASSOCIATION DES BRASSERIES
var sidebar18 = L.control.sidebar('sidebar18', {
    closeButton: true,
    position: 'left'
  });
  map.addControl(sidebar18);
  var marker18 = L.marker([45.50087108231866, -73.57514514564298],{icon: greenMarker}).addTo(map)
  .on('click', function () {
      if (activeSidebar) {
        activeSidebar.hide();
      };
      sidebar18.show();
      activeSidebar =  sidebar18
      marker1.on('click', function(e) {
      var latlng = e.latlng;
      map.setView(latlng, map.getZoom());
    })
  })
  .on('mouseover', function (e) {
              marker18.bindTooltip("ASSOCIATION DES BRASSERIES", { direction: 'top', offset: [0, -30] }).openTooltip();
          })
          .on('mouseout', function (e) {
              marker18.closeTooltip();
          });


          // creation du marker de FROMAGERIE ROY
var sidebar19 = L.control.sidebar('sidebar19', {
    closeButton: true,
    position: 'left'
  });
  map.addControl(sidebar19);
  var marker19 = L.marker([46.040847579328, -73.70525431207949],{icon: grayMarker}).addTo(map)
  .on('click', function () {
      if (activeSidebar) {
        activeSidebar.hide();
      };
      sidebar19.show();
      activeSidebar =  sidebar19
      marker1.on('click', function(e) {
      var latlng = e.latlng;
      map.setView(latlng, map.getZoom());
    })
  })
  .on('mouseover', function (e) {
              marker19.bindTooltip("FROMAGERIE ROY", { direction: 'top', offset: [0, -30] }).openTooltip();
          })
          .on('mouseout', function (e) {
              marker19.closeTooltip();
          }); 







                // Créez des couches pour chaque catégorie
                var categoryLayers = {
                    'AGROALIMENTAIRE': L.layerGroup(),
                    'PÂTE ET PAPIER': L.layerGroup(),
                    'PRODUCTION AGRICOLE': L.layerGroup(),
                    'INDUSTRIE LAITIÈRE': L.layerGroup(),
                    "PRODUCTION D'HUILE": L.layerGroup(),
                    // Ajoutez d'autres catégories au besoin
                };

                // Ajoutez les marqueurs à leurs couches respectives
                marker1.addTo(categoryLayers['PÂTE ET PAPIER']);
                marker2.addTo(categoryLayers['PÂTE ET PAPIER']);
                marker3.addTo(categoryLayers['AGROALIMENTAIRE']);
                marker4.addTo(categoryLayers['AGROALIMENTAIRE']);
                marker5.addTo(categoryLayers['AGROALIMENTAIRE']);
                marker6.addTo(categoryLayers['AGROALIMENTAIRE']);
                marker7.addTo(categoryLayers['AGROALIMENTAIRE']);
                marker8.addTo(categoryLayers["PRODUCTION D'HUILE"]);
                marker9.addTo(categoryLayers["PRODUCTION D'HUILE"]);
                marker10.addTo(categoryLayers["PRODUCTION D'HUILE"]);
                marker11.addTo(categoryLayers['PRODUCTION AGRICOLE']);
                marker12.addTo(categoryLayers['AGROALIMENTAIRE']);
                marker13.addTo(categoryLayers['INDUSTRIE LAITIÈRE']);
                marker14.addTo(categoryLayers['INDUSTRIE LAITIÈRE']);
                marker15.addTo(categoryLayers['PRODUCTION AGRICOLE']);
                marker16.addTo(categoryLayers['INDUSTRIE LAITIÈRE']);
                marker17.addTo(categoryLayers['AGROALIMENTAIRE']);
                marker18.addTo(categoryLayers['AGROALIMENTAIRE']);
                marker19.addTo(categoryLayers['INDUSTRIE LAITIÈRE']);

                // Créez un panneau de contrôle pour activer/désactiver les couches
                L.control.layers(null, categoryLayers, { collapsed: false }).addTo(map);

                // Fonction pour cocher toutes les catégories
                function selectAllCategories() {
                    for (var category in categoryLayers) {
                        map.addLayer(categoryLayers[category]);
                    }
                }

                // Cochez toutes les catégories dès le chargement de la carte
                selectAllCategories();

 // partie de contrôle de la barre laterale
            sidebar.on('show', function () {
                console.log('Sidebar will be visible.');
            });
            sidebar.on('shown', function () {
                console.log('Sidebar is visible.');
            });
            sidebar.on('hide', function () {
                console.log('Sidebar will be hidden.');
            });
            sidebar.on('hidden', function () {
                console.log('Sidebar is hidden.');
            });
            //How to close the sidebar of a leaflet map when I click on another marker?
            L.DomEvent.on(sidebar1.getCloseButton(), 'click', function () {
                activeSidebar = null;
            });
            L.DomEvent.on(sidebar2.getCloseButton(), 'click', function () {
                activeSidebar = null;
            });
            L.DomEvent.on(sidebar3.getCloseButton(), 'click', function () {
                activeSidebar = null;
            });
            L.DomEvent.on(sidebar4.getCloseButton(), 'click', function () {
                activeSidebar = null;
            });
            L.DomEvent.on(sidebar5.getCloseButton(), 'click', function () {
                activeSidebar = null;
            });
            L.DomEvent.on(sidebar6.getCloseButton(), 'click', function () {
                activeSidebar = null;
            });
            L.DomEvent.on(sidebar7.getCloseButton(), 'click', function () {
                activeSidebar = null;
            });
            L.DomEvent.on(sidebar8.getCloseButton(), 'click', function () {
                activeSidebar = null;
            });
            L.DomEvent.on(sidebar9.getCloseButton(), 'click', function () {
                activeSidebar = null;
            });
            L.DomEvent.on(sidebar10.getCloseButton(), 'click', function () {
                activeSidebar = null;
            });
            L.DomEvent.on(sidebar11.getCloseButton(), 'click', function () {
                activeSidebar = null;
            });
            L.DomEvent.on(sidebar12.getCloseButton(), 'click', function () {
                activeSidebar = null;
            });
            L.DomEvent.on(sidebar13.getCloseButton(), 'click', function () {
                activeSidebar = null;
            });
            L.DomEvent.on(sidebar14.getCloseButton(), 'click', function () {
                activeSidebar = null;
            });
            L.DomEvent.on(sidebar15.getCloseButton(), 'click', function () {
                activeSidebar = null;
            });
            L.DomEvent.on(sidebar16.getCloseButton(), 'click', function () {
                activeSidebar = null;
            });
            L.DomEvent.on(sidebar17.getCloseButton(), 'click', function () {
                activeSidebar = null;
            });
            L.DomEvent.on(sidebar18.getCloseButton(), 'click', function () {
                activeSidebar = null;
            });
            L.DomEvent.on(sidebar19.getCloseButton(), 'click', function () {
              activeSidebar = null;
          });