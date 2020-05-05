
<?php
    /* Template Name: Proveedor  */ 
    get_header();
?>


  <section id="banner8" class="template-section">
  
                 <div class="cen">
                    <h1><span class="rojo">Proveedores</span><div class="sombra">¡SÚMATE A NUESTRO SELECTO GRUPO DE PROVEEDORES!</div></h1>
 
  <p class="blanco">Si tienes un producto de gran calidad y estás comprometido con el servicio, en Grupo COSISA estamos interesados en conocerte. Deja tu información y pronto te contactaremos.</p>
 
    </div>
     
    
</section>
<section id="cotizar" class="template-section">
<div class="contenedor">
<div class="grid">
<div class="col especial"><?php echo do_shortcode( '[caldera_form id="CF5e73d683229d3"]' ); ?></div>
<div class="col"><img class="so" src="<?php echo get_stylesheet_directory_uri(); ?>/img/proveedor.png" alt="Logo"></div>

</div>
</div>
</section>




<?php 
    get_footer();
?>



