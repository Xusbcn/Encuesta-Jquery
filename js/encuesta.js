$('document').ready(function () {
   $('body').append('<div class ="contenedores" id ="contenedor">');
    function iniciarEncuestaJquery(){
        
        $('#contenedor').append('<div id="divinicioencuesta">')
        $('#divinicioencuesta').append('<h3>Encuesta de satisfacción del sistema de evaluación de M06 (AWS2)</h3>')
        $('#divinicioencuesta').append('<button class="boton" id ="botoncomenzar">comenzar encuesta </button>')
         $('<br/>')
         $('#botoncomenzar').on('click', function(){
             
            encuestae1()
            
         })
    }
    iniciarEncuestaJquery()
   // iniciarEncuestae1()

    function encuestae1(){
        
        $('#contenedor').append(
           
            $('<div/>', {
                name: 'divlabel',
                class: 'estilolabel',
                id: 'dive1',
                text: '¿Has cursado el Módulo M06 con el sistema de evaluación por Proyectos/Logros?'
            }),
            
            $('<form/>',{
                action: '#',
                method: '#',
                id: 'forme1'
            }
            ),
            $('<button/>', {
                type: 'submit',
                id: 'botone1',
                text: 'Continuar'
            })
            
        )
        $('#forme1').append(
            $('<div/>)',{
            class: 'divcheckbox',
            id: 'divcheckboxe1'
        }).append(
            $('<input/>', {
                type: 'radio',
                name: 'radioe1',
                id:'radioe1-1',
                value: 'si'
            }),
            $('<label/>', {
                text: 'si'
            })
        ),
         $('<div/>)', {
                class: 'divcheckbox',
                id: 'divcheckboxe2'
            }).append(
            $('<input/>', {
                type: 'radio',
                name: 'radioe1',
                id: 'radioe1-2',
                value: 'no'
            }),
            $('<label/>', {
                text: 'no'
            })
            )
        )
        $('#divinicioencuesta').remove()

       

        $('#botone1').on('click',function(){
            if($('#radioe1-1').is(':checked')){
                encuestae3()
                $('#botone1').prop('disabled', true)
                $('#forme1 input[name="radioe1"]').each(function() {
                    $(this).prop('disabled',true)
                })

            }
            else if ($('#radioe1-2').is(':checked')){
                encuestae2()
                $('#botone1').prop('disabled', true)
                $('#forme1 input[name="radioe1"]').each(function () {
                    $(this).prop('disabled', true)
                })
            }
        })
        
    }

    

    function encuestae2(){
        $('#contenedor').append($('<div id="contenedore2"/>'))
        $('#contenedore2').append(
            $('<hr/>'),
            $('<div/>',{
                name: 'divlabel',
                class:'estilolabel',
                text: '¡Gracias por haber participado en esta encuesta!'
            }),
            $('<label/>').text('Puedes dejarnos un comentario en el siguiente recuadro:'),
            $('<form/>', {
                action: '#',
                method: '#',
                id: 'forme2'
            }),
            $('<label/> ').text('Resumen de la encuesta:'),
            $('<div/>',{
                id: 'divresumen'
            }),
            $('<button/>',{
                id: 'botonfinalizar',
                text:'Finalizar Encuesta'
            })

        )

        $('#forme2').append(
            $('<div id ="divTextAreae2"/>').append(
                $('<textarea/>',{
                    id: 'textareae2'
                })
            )
        )
        obtenervalores()
        $('#botonfinalizar').on('click',finalizarEncuesta)
    }
    
    

    function encuestae3(){
        $('#contenedor').append(
            $('<hr/>'),
            $('<div/>', {
                name: 'divlabel',
                class: 'estilolabel',
                id: 'dive3',
                text: '¿Crees que el sistema de evaluación por Proyectos / Logros es adecuado ?'
            }),
            $('<form/>', {
                    action: '#',
                    method: '#',
                    id: 'forme3'
                }),
            $('<button/>', {
                type: 'submit',
                id: 'botone3',
                text: 'Continuar'
            })

        )
        $('#forme3').append(
            $('<div/>)', {
                class: 'divcheckbox',
                id: 'divcheckboxe3-1'
            }).append(
                $('<input/>', {
                    type: 'radio',
                    name: 'radioe3',
                    id: 'radioe3-1',
                    value: 'Si'
                }),
                $('<label/>', {
                    text: 'Si'
                })
            ),
            $('<div/>)', {
                class: 'divcheckbox',
                id: 'divcheckboxe3-2'
            }).append(
                $('<input/>', {
                    type: 'radio',
                    name: 'radioe3',
                    id: 'radioe3-2',
                    value: 'No'
                }),
                $('<label/>', {
                    text: 'No'
                })
            ),
            $('<div/>)', {
                    class: 'divcheckbox',
                    id: 'divcheckboxe3-3'
                }).append(
                    $('<input/>', {
                        type: 'radio',
                        name: 'radioe3',
                        id: 'radioe3-3',
                        value: 'No lo se'
                    }),
                    $('<label/>', {
                        text: 'No lo se'
                    })
        )
        )
        

        $('#botone3').on('click', function () {
            if ($('#radioe3-1').is(':checked')) {
                encuestae5()
                $('#botone3').prop('disabled',true)
                $('#forme3 input[name="radioe3"]').each(function () {
                    $(this).prop('disabled', true)
                })
            } else if ($('#radioe3-2').is(':checked')) {
                encuestae4()
                $('#forme3 input[name="radioe3"]').each(function () {
                    $(this).prop('disabled', true)
                })
                $('#botone3').prop('disabled', true)
            } else if ($('#radioe3-3').is(':checked')) {
                encuestae5()
                $('#botone3').prop('disabled', true)
                $('#forme3 input[name="radioe3"]').each(function () {
                    $(this).prop('disabled', true)
                })
            }
        })
    }
   

    function encuestae4() {
        $('#contenedor').append(
            $('<hr/>'),
            $('<div/>', {
                name: 'divlabel',
                class: 'estilolabel',
                id:'dive4',
                text: '¿Explicanos porque crees que el sistema de evaluación por Proyectos/Logros no es adecuado?'
            }),
            $('<form/>', {
                action: '#',
                method: '#',
                id: 'forme4'
            }),
            $('<button/>', {
                type: 'submit',
                id: 'botone4',
                text: 'Continuar'
            })

        )
        $('#forme4').append(
            $('<div/>)', {
                class: 'divcheckbox',
                id: 'divcheckboxe4-1'
            }).append(
                $('<input/>', {
                    type: 'checkbox',
                    name: 'checkboxe4',
                    value: 'El sistema no evalua las competencias reales que necesita un profesional'
                }),
                $('<label/>', {
                    text: 'El sistema no evalua las competencias reales que necesita un profesional'
                })
            ),
            $('<div/>)', {
                class: 'divcheckbox',
                id: 'divcheckboxe4-2'
            }).append(
                $('<input/>', {
                    type: 'checkbox',
                    name: 'checkboxe4',
                    value: 'El sistema es injusto'
                }),
                $('<label/>', {
                    text: 'El sistema es injusto'
                })
            ),
            $('<div/>)', {
                class: 'divcheckbox',
                id: 'divcheckboxe4-3'
            }).append(
                $('<input/>', {
                    type: 'checkbox',
                    name: 'checkboxe4',
                    value: 'El sistema solo se puede aplicar a aquellos alumnos que cursan el módulo por evaluación continua'
                }),
                $('<label/>', {
                    text: 'El sistema solo se puede aplicar a aquellos alumnos que cursan el módulo por evaluación continua'
                })
            ),

            $('<div/>)', {
                class: 'divcheckbox',
                id: 'divcheckboxe4-4'
            }).append(
                $('<input/>', {
                    type: 'checkbox',
                    name: 'texteareanamee4',
                    id:'radiotextarea'
                    //value: 'El sistema solo se puede aplicar a aquellos alumnos que cursan el módulo por evaluación continua'
                }),
                $('<label/>', {
                    text: 'Otros Motivos'
                })
            ),


            $('<div id ="divTextAreae2"/>').append(
                
                $('<textarea/>', {
                    id: 'textareae4'
                })
            )
        )
        $('#botone4').on('click', function (){
            var incremento =0;
            $('#forme4 input[name="checkboxe4"]').each(function () {
                if ($(this).is(':checked')) {
                    incremento++;
                }
            })
            if (incremento > 0 || $('#radiotextarea').is(':checked') && $('#textareae4').val()!='') {
               encuestae2()
               $('#forme4 input[name="checkboxe4"]').each(function () {
                   $(this).prop('disabled', true)
               })
               $('#botone4').prop('disabled',true)

            }
            
        })
    }
   
    function encuestae5() {
        $('#contenedor').append(
            $('<hr/>'),
            $('<div/>', {
                name: 'divlabel',
                class: 'estilolabel',
                id:'dive5',
                text: '¿Con cual de las siguientes afirmaciones estás de acuerdo? La evaluación por Proyectos/Logros es...'
                
            }),
            $('<form/>', {
                action: '#',
                method: '#',
                id: 'forme5'
            }),
            $('<button/>', {
                type: 'submit',
                id: 'botone5',
                text: 'Continuar'
            })

        )
        $('#forme5').append(
            $('<div/>)', {
                class: 'divcheckbox',
                id: 'divcheckboxe5-1'
            }).append(
                $('<input/>', {
                    type: 'checkbox',
                    name: 'checkboxe5',
                    value: 'Es un sistema más motivador para el alumno'
                }),
                $('<label/>', {
                    text: 'Es un sistema más motivador para el alumno'
                })
            ),
            $('<div/>)', {
                class: 'divcheckbox',
                id: 'divcheckboxe5-2'
            }).append(
                $('<input/>', {
                    type: 'checkbox',
                    name: 'checkboxe5',
                    value: 'Es más justo para el alumno'
                }),
                $('<label/>', {
                    text: 'Es más justo para el alumno'
                })
            ),
            $('<div/>)', {
                class: 'divcheckbox',
                id: 'divcheckboxe5-3'
            }).append(
                $('<input/>', {
                    type: 'checkbox',
                    name: 'checkboxe5',
                    value: 'Es más claro y transparente para el alumno'
                }),
                $('<label/>', {
                    text: 'Es más claro y transparente para el alumno'
                })
            ),
            $('<div/>)', {
                class: 'divcheckbox',
                id: 'divcheckboxe4-3'
            }).append(
                $('<input/>', {
                    type: 'checkbox',
                    name: 'checkboxe5',
                    value: 'Ayuda al alumno a tener claros los objetivos'
                }),
                $('<label/>', {
                    text: 'Ayuda al alumno a tener claros los objetivos'
                })
            )
        )

        $('#botone5').on('click', function () {
            var incremento = 0;
            $('#forme5 input[name="checkboxe5"]').each(function () {
                if ($(this).is(':checked')) {
                    incremento++;
                }
            })
            if (incremento > 0 ) {
                encuestae2()
                $('#forme4 input[name="checkboxe5"]').each(function () {
                    $(this).prop('disabled', true)
                })
                $('#botone5').prop('disabled', true)


            }

            
        })
    }
    


    //ACCIONES
    //generar dinámicamente encuesta e1
    var aumentar=0;

    function finalizarEncuesta(){
      //  $('#botonfinalizar').remove()
       var divresumenclonado = $('#divresumen').clone()
       
        var textareaform2 = $('#textareae2').clone()
       
      
       $('#contenedor').empty()
        $('#contenedor').append(
            $('<div/>',{
                id: 'divtitulofinal'
            }).append('<h2>Este es el resumen de tus respuestas</h2>'),
         $('<div/>',{
             id: 'resumentotal'
         }).append(
            divresumenclonado
            
         ),
         $('<button/>', {
             id: 'irainicio',
             text: 'Ir al inicio'
         })
         )
          
         if (textareaform2.val() != '') {
             $('#resumentotal').append(
                $('<p> TU COMENTARIO FINAL </P>'),
                $('<li>' + textareaform2.val() + '</li>')
             )
         }
         
        

       $('#irainicio').on('click', function() {
           $('#contenedor').empty()
           iniciarEncuestaJquery()
       })
        
    }
   function obtenervalores(){
      $('#forme1 input[name="radioe1"]').each(function(){
          if($(this).is(':checked')){
              $('#divresumen').append($('#dive1').text())
              $('#divresumen').append($('<br/>'))
              $('#divresumen') .append('<li>'+$(this).val()+'</li>')
              $('#divresumen').append($('<br/>'))
          }
      })



      $('#forme3 input[name="radioe3"]').each(function () {
          if($(this).is(':checked')){
              aumentar++;
          }
      })
      if(aumentar>0){
          
         $('#divresumen').append($('#dive3').text())
         
      }
      $('#forme3 input[name="radioe3"]').each(function () {
          if ($(this).is(':checked')) {
              $('#divresumen').append('<li>' + $(this).val() + '</li>')
              $('#divresumen').append($('<br/>'))
          }
      })




      $('#forme4 input[name="checkboxe4"]').each(function () {
          if ($(this).is(':checked')) {
              aumentar++;
          }
      })
      if (aumentar > 0 || $('#radiotextarea').is(':checked') ) {
          $('#divresumen').append($('#dive4').text())
          
      }
      $('#forme4 input[name="checkboxe4"]').each(function () {
          if ($(this).is(':checked')) {
              $('#divresumen').append($('<br/>'))
              $('#divresumen').append('<li>' + $(this).val() + '</li>')
              
          }
      })
      if ($('#radiotextarea').is(':checked')) {
          console.log('entra')
          $('#divresumen').append($('<br/>'))
          $('#divresumen').append('<li>' + $('#textareae4').val() + '</li>')
          $('#divresumen').append($('<br/>'))
      }


      $('#forme5 input[name="checkboxe5"]').each(function () {
          if ($(this).is(':checked')) {
              aumentar++;
          }
      })
      if (aumentar > 0) {
          $('#divresumen').append($('#dive5').text())
          $('#divresumen').append($('<br/>'))
      }
      $('#forme5 input[name="checkboxe5"]').each(function () {
          if ($(this).is(':checked')) {
              
              $('#divresumen').append('<li>' + $(this).val() + '</li>')
              $('#divresumen').append($('<br/>'))
          }
      })
   }
})