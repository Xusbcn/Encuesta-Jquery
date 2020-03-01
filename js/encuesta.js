$('document').ready(function () {
    //creamos el div contenedor de las encuestas
   $('body').append('<div class ="contenedores" id ="contenedor">');

   //creamos el inicio de las encuestas
    function iniciarEncuestaJquery(){
        
        $('#contenedor').append('<div id="divinicioencuesta" class="contenesordiv">')
        $('#divinicioencuesta').append('<h1>Encuesta de satisfacción del sistema de evaluación de M06 (AWS2)</h1>')
        $('#divinicioencuesta').append('<button class="estiloboton" id ="botoncomenzar">comenzar encuesta </button>')
         $('<br/>')
         $('#botoncomenzar').on('click', function(){
             
            encuestae1()
            
         })
    }

    iniciarEncuestaJquery()
   
//funcion que crea la encuesta e1
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
                class: 'estiloboton botonmargine1',
                text: 'Continuar'
            })
            
        )
        $('#forme1').append(
            $('<div/>)',{
            class: 'estiloradio',
            id: 'divcheckboxe1'
        }).append(
            $('<input/>', {
                type: 'radio',
                name: 'radioe1',
                id:'radioe1-1',
                value: 'Si'
            }),
            $('<label/>', {
                text: 'Si'
            })
        ),
         $('<div/>)', {
                class: 'estiloradio',
                id: 'divcheckboxe2'
            }).append(
            $('<input/>', {
                type: 'radio',
                name: 'radioe1',
                id: 'radioe1-2',
                value: 'No'
            }),
            $('<label/>', {
                text: 'No'
            })
            )
        )
        //eliminamos la bienvenida
        $('#divinicioencuesta').remove()

       
        //creamos la siguiente encuesta según la respuesta del usuario.
        //Deshabilitaremos los radiosbuttons una vez clicado el boton 'continuar' para evitar alterar la respuesta final
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
            } else {
                alert('HAS DE ELEGIR UNA RESPUESTA PARA CONTINUAR')
            }
        })
        
    }

    
    // funcion que crea la encuesta e2
    function encuestae2(){
        $('#contenedor').append($('<div id="contenedore2"/>'))
        $('#contenedore2').append(
            $('<hr/>'),
            $('<div/>',{
                name: 'divlabel',
                class:'estilolabel estilotexto',
                text: '¡Gracias por haber participado en esta encuesta!'
            }),
            $('<label/>',{
                text: 'Puedes dejarnos un comentario en el siguiente recuadro:',
                class: 'labele2'
            }),
            
            $('<form/>', {
                action: '#',
                method: '#',
                id: 'forme2'
            }),
            $('<br/>'),
            $('<label/> ',{
                text: 'Resumen de la encuesta:',
                class: 'labele2'
            }),
            
            $('<div/>',{
                id: 'divresumen',
                class: 'estilodivresumen'
            }),
            $('<button/>',{
                id: 'botonfinalizar',
                class: 'estiloboton botonmargine1',
                text:'Finalizar Encuesta'
            })

        )

        $('#forme2').append(
            $('<br/>'),
            $('<div id ="divTextAreae2"/>').append(
                $('<textarea/>',{
                    id: 'textareae2'
                })
            )
        )
        
        obtenervalores() //Llamada de la función que recoge todas las respuestas del usuario 
        $('#botonfinalizar').on('click',finalizarEncuesta)
    }
    
    
    //funcion que crea la encuesta e3
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
                class: 'estiloboton botonmargine1',
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
        
           //comprobamos que haya, al menos, una respuesta seleccionada. Deshabilitamos botones una vez le damos a continuar         
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
            } else {
                alert('HAS DE ELEGIR UNA RESPUESTA PARA CONTINUAR')
            }
        })
    }
   
    // Funcion que crea la encuesta e4
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
                class:'estiloboton',
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
        
        $('#textareae4').prop('disabled', true) //deshabilitamos el textarea
            // habilitamos el textarea hasta que 'Otros Motivos' sea seleccionado. Si se desseleccionase, el textarea quedaría deshabilitado y vacio.   
        $('#radiotextarea').on('click',function(){
            $('#textareae4').prop('disabled', false)
            if ($('#radiotextarea').is(':checked')) {
                $('#textareae4').prop('disabled', false)
            } else {
                $('#textareae4').val('')
                $('#textareae4').prop('disabled', true)
            }
        })

        
            
        


        $('#botone4').on('click', function (){
            var incremento =0;
            $('#forme4 input[name="checkboxe4"]').each(function () {
                if ($(this).is(':checked')) {
                    incremento++;
                }
            })
            if (incremento > 0 && $('#radiotextarea').is(':checked') && $('#textareae4').val() != '' || incremento > 0 && $('#radiotextarea').prop('checked', false)) {
               encuestae2()
               $('#forme4 input[name="checkboxe4"]').each(function () {
                   $(this).prop('disabled', true)
               })
               $('#textareae4').prop('disabled', true)
               $('#radiotextarea').prop('disabled',true)
               $('#botone4').prop('disabled',true)

            } else {
                alert('HAS DE ELEGIR, AL MENOS, UNA RESPUESTA PARA CONTINUAR')
            }
            
        })
    }
   
    //Función que crea la encuesta e5
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
                class: 'estiloboton',
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
            var incremento = 0; // variable que indica el numero de checkboxes seleccionado
            $('#forme5 input[name="checkboxe5"]').each(function () {
                if ($(this).is(':checked')) {
                    incremento++;
                }
            })
            if (incremento > 0 ) {
                encuestae2()
                $('#forme5 input[name="checkboxe5"]').each(function () {
                    $(this).prop('disabled', true)
                })
                $('#botone5').prop('disabled', true)


            }else{
                alert('HAS DE ELEGIR, AL MENOS, UNA RESPUESTA PARA CONTINUAR')
            }

            
        })
    }
    


    //ACCIONES
    
    var aumentar=0;

    //Función que crea la vista final
    function finalizarEncuesta(){
      
       var divresumenclonado = $('#divresumen').clone()//clonamos el contenido de todas las respuestas del usuario
     
       
        var textareaform2 = $('#textareae2').clone()//clonamos contenido del textarea de la encuesta e2
       
      
       $('#contenedor').empty() //eliminamos contenido del contenedor
        //añadimos el contenido clonado
        $('#contenedor').append(
            $('<div/>',{
                id: 'divtitulofinal'
            }).append('<h2>ESTE ES EL RESUMEN DE TUS RESPUESTAS</h2>'),
         $('<div/>',{
             id: 'resumentotal',
             class:'classresumen'
         }).append(
            divresumenclonado
            
         ),
         $('<button/>', {
             id: 'irainicio',
             class: 'estiloboton',
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

    //funcion que obtiene las respuestas de los usuarios y la muestar en la encuesta e2
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