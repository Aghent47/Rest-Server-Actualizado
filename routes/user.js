import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        msg:'get API'
    });
});
router.post('/', (req, res) => {
    res.json({
        msg:'post API'
    });
});
router.put('/', (req, res) => {
    res.json({
        msg:'put API'
    });
});
router.delete('/', (req, res) => {
    res.json({
        msg:'delete API'
    });
});

export default router;