const express= require ('express')
const router= express.Router()
const ingressosController= require ('../controllers/ingressosController')

router.post ('/', ingressosController.cadastrarIngresso)
router.get ('/', ingressosController.listarIngresso)
router.put ('/', ingressosController.atualizarIngresso)
router.delete ('/', ingressosController.deletarIngresso)

module.exports= router