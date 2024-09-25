const express= require ('express')
const router= express.Router()
const eventosController= require ('../controllers/eventosController')

router.post ('/', eventosController.cadastrarEvento)
router.get ('/', eventosController.listarEvento)
router.put ('/', eventosController.atualizarEvento)
router.delete ('/', eventosController.deletarEvento )

module.exports= router