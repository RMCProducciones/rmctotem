<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        
        return $this->render('default/index.html.twig');
    }

    /**
     * @Route("/niveles/", name="niveles")
     */
    public function nivelesAction()
    {
        return $this->render('default/niveles.html.twig');
    }


    /**
     * @Route("/categoriasNivel/{nivel}/", name="categoriasNivel")
     */
    public function categoriasNivelAction($nivel)
    {
        $em = $this->getDoctrine()->getManager();

        $query = $em->createQuery(
            'SELECT l, c
            FROM AppBundle:Local l JOIN l.categoria c
            WHERE l.nivel = :nivelId
            GROUP BY c.nombre
            ORDER BY c.nombre ASC'
        );
        $query->setParameter('nivelId', $nivel);

        $categorias = $query->getResult();

        return $this->render('default/categorias_nivel.html.twig', array('nivel' => $nivel, 'categorias' => $categorias));
    }


    /**
     * @Route("/categorias/{nivel}/{idCategoria}", name="categorias")
     */
    public function categoriasAction($nivel, $idCategoria)
    {
        $em = $this->getDoctrine()->getManager();
        $categorias = $em->getRepository('AppBundle:Categoria')->findBY(
            array(),
            array('nombre' => 'ASC')
        );
        $categoriaSeleccioanada = $em->getRepository('AppBundle:Categoria')->findOneBy( array( 'id' => $idCategoria ) );

        $locales = $em->getRepository('AppBundle:Local')->findBy(
            array(
                'nivel' => $nivel,
                'categoria' => $idCategoria
            ),
            array('nombre' => 'ASC')
        );

        return $this->render('default/categorias.html.twig', array('nivel' => $nivel, 'categorias' => $categorias, 'categoriaSeleccioanada' => $categoriaSeleccioanada, 'locales' => $locales));
    }

    /**
     * @Route("/locales/{nivel}/{idCategoria}", name="locales")
     */
    public function localesAction($nivel, $idCategoria)
    {
        $em = $this->getDoctrine()->getManager();
        $categoria = $em->getRepository('AppBundle:Categoria')->findOneBy( array( 'id' => $idCategoria ) );
      
        $locales = $em->getRepository('AppBundle:Local')->findBy(array(
            'nivel' => $nivel,
            'categoria' => $categoria
        ),
            array('nombre' => 'ASC'));

        return $this->render('default/locales.html.twig', array('nivel' => $nivel, 'categoria' => $categoria, 'locales' => $locales));
    }

    /**
     * @Route("/local/{nivel}/{idLocal}", name="local")
     */
    public function localAction($nivel, $idLocal)
    {
        $em = $this->getDoctrine()->getManager();
 
        $local = $em->getRepository('AppBundle:Local')->findOneBy(array(
            'id' => $idLocal
        ));

        return $this->render('default/local.html.twig', array('nivel' => $nivel, 'local' => $local));
    }









    /**
     * @Route("/cartelera/", name="cartelera")
     */
    public function carteleraAction()
    {

        return $this->render('default/cartelera.html.twig');
    }

    /**
     * @Route("/noticias/", name="noticias")
     */
    public function noticiasAction()
    {

        return $this->render('default/noticias.html.twig');
    }

    /**
     * @Route("/promociones/", name="promociones")
     */
    public function promocionesAction()
    {

        return $this->render('default/promociones.html.twig');
    }

    
}
