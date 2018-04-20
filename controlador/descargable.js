
jQuery(function($){
	/*recupera el id*/
	$("a[id]").click(function() {
		var id = $(this).attr("id");
		var href = $(this).attr("href");
        /*confirm("id_boton: " + id + " URL " + href);*/
        
        if (confirm('He leído en manual de aplicación. Acepto los términos y condiciones para su correcto uso.')){
	        /*switch de descarga*/
		    switch(id)
		    {
		    	/*Manuales
		    	manual_imagotipo*/
		    	case 'manual_imagotipo':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/imagotipo/manual/Manual_Imagotipo_La_Salle.pdf';
		    	break;

		    	/*manual_plecas*/
		    	case 'manual_plecas':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/plecas_institucionales/manual/manual_aplicaciones_plecas.jpg';
		    	break;

		    	/*manual_legales*/
		    	case 'manual_legales':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/legales/manual/Manual_de_aplicacion_Logotipos_Institucionales.jpg';
		    	break


		    	/*Solicitudes de servicio
		    	solicitud_foto_video*/
		    	case 'solicitud_foto_video':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/solicitudes/brief-Solicitud_de_Foto_y_Video.pdf';
		    	break;

		    	/*solicitud_diseno*/
		    	case 'solicitud_diseno':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/solicitudes/brief-Diseno_rellenable.pdf';
		    	break;

		    	/*solicitud_diseno*/
		    	case 'uso_pantalla':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/pantalla/Usodelapantalla.pdf';
		    	break;


		    	/*botones_manuales
		    	boton_manual_imagotipo*/
		    	case 'boton_manual_imagotipo':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/imagotipo/manual/Manual_Imagotipo_La_Salle.pdf';
		    	
		    	break;

		    	/*boton_manual_legales*/
		    	case 'boton_manual_legales':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/legales/manual/Manual_de_aplicacion_Logotipos_Institucionales.jpg';
		    	break

		    	/*boton_manual_plecas*/
		    	case 'boton_manual_plecas':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/plecas_institucionales/manual/manual_aplicaciones_plecas.jpg';
		    	break;


		    	/*imagotipo JPG
		    	color jpg*/
		    	case 'color_jpg':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/imagotipo/JPG/imagotipo_color.jpg';
		    	break;

		    	/*gris_jpg*/
		    	case 'gris_jpg':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/imagotipo/JPG/imagotipo_grises.jpg';
		    	break;

		    	/*calado_jpg*/
		    	case 'calado_jpg':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/imagotipo/JPG/imagotipo_calado.jpg';
		    	break;

		    	/*negro_jpg*/
		    	case 'negro_jpg':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/imagotipo/JPG/imagotipo_negro.jpg';
		    	break;

		    	/*duotono_jpg*/
		    	case 'duotono_jpg':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/imagotipo/JPG/imagotipo_duotono.jpg';
		    	break;

		    	/*todos_jpg*/
		    	case 'todos_jpg':
		    		/*window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/imagotipo/JPG.zip';*/
		    		generaDescarga ('descargables/imagotipo/JPG.zip');
		    	break;


		    	/*imagotipo_png
		    	color_png*/
		    	case 'color_png':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/imagotipo/PNG/imagotipo_color.png';
		    	break;

		    	/*gris_png*/
		    	case 'gris_png':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/imagotipo/PNG/imagotipo_grises.png';
		    	break;

		    	/*calado_png*/
		    	case 'calado_png':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/imagotipo/PNG/imagotipo_calado.png';
		    	break;

		    	/*negro_png*/
		    	case 'negro_png':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/imagotipo/PNG/imagotipo_negro.png';
		    	break;

		    	/*duotono_png*/
		    	case 'duotono_png':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/imagotipo/PNG/imagotipo_duotono.png';
		    	break;

		    	/*todos_png*/
		    	case 'todos_png':
		    		/*window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/imagotipo/PNG.zip';*/
					generaDescarga ('descargables/imagotipo/PNG.zip');
			    	break;


		    	/*Legales
		    	legal_blanco_pdf*/
		    	case 'legal_blanco_pdf':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/legales/PDF/Legal_Color_PDF.pdf';
		    	break;

		    	/*legal_azul_pdf*/
		    	case 'legal_azul_pdf':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/legales/PDF/Legal_Calado_PDF.pdf';
		    	break;

		    	//legal_blanco_jpg TEMPORALMENTE DESHABILITADOS
		    	/*case 'legal_blanco_jpg':
		    		alert("se abrio legal_blanco_jpg");
		    		e.preventDefault();  //stop the browser from following
	    			//window.location.href = 'descargables/imagotipo/color/imagotipo_color.jpg';
		    	break;

		    	//legal_azul_jpg
		    	case 'legal_azul_jpg':
		    		alert("se abrio legal_azul_jpg");
		    		e.preventDefault();  //stop the browser from following
	    			//window.location.href = 'descargables/imagotipo/color/imagotipo_color.jpg';
		    	break;*/


		    	/*Word
		    	word_condesa*/
		    	case 'word_condesa':
		    		/*window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/papeleria/Membretada_Condesa.docx';*/
		    		generaDescarga ('descargables/papeleria/Membretada_Condesa.docx');
		    	break;

		    	/*word_sanFernando*/
		    	case 'word_sanFernando':
		    		/*window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/papeleria/Membretada_SanFernando.docx';*/
		    		generaDescarga ('descargables/papeleria/Membretada_SanFernando.docx');
		    	break;

		    	/*word_santaTeresa*/
		    	case 'word_santaTeresa':
		    		/*window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/papeleria/Membretada_SantaTeresa.docx';*/
		    		generaDescarga ('descargables/papeleria/Membretada_SantaTeresa.docx');
		    	break;

		    	/*word_santaLucia*/
		    	case 'word_santaLucia':
		    		/*window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/papeleria/Membretada_SantaLucia.docx';*/
		    		generaDescarga ('descargables/papeleria/Membretada_SantaLucia.docx');
		    	break;


		    	/*Ppt
		    	ppt_4_3*/
		    	case 'ppt_4_3':
		    		/*window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/presentacion/LaSalle.ppt';*/
		    		generaDescarga ('descargables/presentacion/LaSalle.ppt');
		    	break;

		    	/*ppt_16_9*/
		    	case 'ppt_16_9':
		    		/*window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/presentacion/LaSalle_wide.ppt';*/
		    		generaDescarga ('descargables/presentacion/LaSalle_wide.ppt');
		    	break;
		    	/*Cortinilla Institucional
		    	/*boton_uso_pantalla*/
		    	case 'cortinilla_Institucional_negro':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/cortinillas/cortinilla_negros.zip';
		    	break
		    	case 'cortinilla_Institucional_blanco':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/cortinillas/cortinilla_blancos.zip';
		    	break
				/*boton_uso_pantalla*/
		    	case 'boton_uso_pantalla':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/cortinillas/manual/DEFINICIONES_SERVICIO_PANTALLA_PUBLICITARIA.pdf';
		    	break


		    	/*Plecas
		    	vertical_media_carta*/
		    	case 'vertical_media_carta':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/plecas_institucionales/media_carta/v_media_carta.jpg';
		    	break;

		    	/*horizontal_media_carta*/
		    	case 'horizontal_media_carta':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/plecas_institucionales/media_carta/h_media_carta.jpg';
		    	break;

		    	/*vertical_carta*/
		    	case 'vertical_carta':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/plecas_institucionales/carta/v_cartel_carta.jpg';
		    	break;

		    	/*horizontal_carta*/
		    	case 'horizontal_carta':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/plecas_institucionales/carta/h_cartel_carta.jpg';
		    	break;

		    	/*vertical_tabloide*/
		    	case 'vertical_tabloide':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/plecas_institucionales/tabloide/v_tabloide.jpg';
		    	break;

		    	/*horizontal_tabloide*/
		    	case 'horizontal_tabloide':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/plecas_institucionales/tabloide/h_tabloide.jpg';
		    	break;
		    	/*vertical_tabloide*/
		    	case 'vertical_90x60':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/plecas_institucionales/90x60/v_90x60.jpg';
		    	break;

		    	/*horizontal_tabloide*/
		    	case 'horizontal_90x60':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/plecas_institucionales/90x60/h_90x60.jpg';
		    	break;
		    	/*totem*/
		    	case 'totem':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/plecas_institucionales/totem/totem_93x200.jpg';
		    	break;

		    	/*xbanner*/
		    	case 'xbanner':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/plecas_institucionales/xbanner/xbanner_180x80.jpg';
		    	break;

		    	/*manta_2x3*/
		    	case 'manta_2x3':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/plecas_institucionales/mantas/manta_2x3.jpg';
		    	break;

		    	/*manta_3x3*/
		    	case 'manta_3x3':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/plecas_institucionales/mantas/manta_3x3.jpg';
		    	break;

		    	/*manta_4x3*/
		    	case 'manta_4x3':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/plecas_institucionales/mantas/manta_4x3.jpg';
		    	break;


		    	/*protocolo_institucional_completo*/
		    	case 'protocolo_institucional_completo':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/protocolo_institucional/0_PROTOCOLO_LASALLE.pdf';
		    	break;
		    	case 'protocolo_institucional_completo_2':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/protocolo_institucional/0_PROTOCOLO_LASALLE.pdf';
		    	break;
		    	case 'boton_guia_rapida':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/protocolo_institucional/7_PROTOCOLO_GUIA-RAPIDA_LASALLE.pdf';
		    	break;

		    	/*protocolo_institucional*/
		    	/*case 'protocolo_institucional':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/protocolo_institucional/1_PROTOCOLO_INSTITUCIONALES_LASALLE.pdf';
		    	break;*/

		    	/*protocolo_invitaciones*/
		    	/*case 'protocolo_invitaciones':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/protocolo_institucional/4_PROTOCOLO_INVITACIONES_LASALLE.pdf';
		    	break;*/

		    	/*protocolo_academicos*/
		    	/*case 'protocolo_academicos':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/protocolo_institucional/2_PROTOCOLO_ACADEMICAS_LASALLE.pdf';
		    	break;*/

		    	/*protocolo_vestimenta*/
		    	/*case 'protocolo_vestimenta':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/protocolo_institucional/5_PROTOCOLO_VESTIMENTA_LASALLE.pdf';
		    	break;*/

		    	/*protocolo_presidia*/
		    	/*case 'protocolo_presidia':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/protocolo_institucional/3_PROTOCOLO_PRESIDIA_LASALLE.pdf';
		    	break;*/
		    	/*Fe de erratas*/
				case 'fe_erratas':
		    		window.location.href = 'modelo/DescargaArchivo.php?file=../descargables/protocolo_institucional/PROTOCOLO_FE-DE-ERRATAS_LASALLE_AGO_2017.png';
		    	break;
		    	default:
		    		alert("No tiene ID asociado");
		    	break
		    }
	    }
	});
});

function generaDescarga (path){
	var file_path = path;
	var a = document.createElement('A');
	a.href = file_path;
	a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}