// Datos de productos

class Producto {
    constructor(descripcion, categoria, destacado, imagen, precio) {
        this.descripcion = descripcion
        this.categoria = categoria
        this.destacado = destacado
        this.imagen = imagen
        this.precio = precio
    }
}

const producto1 = new Producto('PROCESADOR RYZEN 5 5600G', 'PROCESADORES', true, './media/productos/ryzen_5_5600g.jpg', 38449)
const producto2 = new Producto('PROCESADOR RYZEN 7 5700G', 'PROCESADORES', true,'./media/productos/ryzen_7_5700g.jpg', 54999)
const producto3 = new Producto('PROCESADOR INTEL CORE I3 12100F', 'PROCESADORES', false,'./media/productos/intel_I3_12100f.jpg', 20200)
const producto4 = new Producto('PROCESADOR INTEL CORE I5 12400F', 'PROCESADORES', true,'./media/productos/intel_I5_12400f.jpg', 42990)
const producto5 = new Producto('MOTHERBOARD ASUS A520', 'MOTHERBOARDS', false,'./media/productos/mother_asus_a520.jpg', 12830)
const producto6 = new Producto('MOTHERBOARD GIGABYTE H610', 'MOTHERBOARDS', false,'./media/productos/mother_gigabyte_h610.jpg', 20782)
const producto7 = new Producto('PLACA DE VIDEO ASUS GTX 1650', 'PLACAS DE VIDEO', false,'./media/productos/placa_de_video_gtx_1650.jpg', 52272)
const producto8 = new Producto('PLACA DE VIDEO RX 6500XT', 'PLACAS DE VIDEO', true,'./media/productos/placa_de_video_rx_6500xt.jpg', 59850)
const producto9 = new Producto('PROCESADOR ATHLON 3000G', 'PROCESADORES', false,'./media/productos/athlon_3000g.jpg', 19189)
const producto10 = new Producto('FUENTE COOLERMASTER 800W 80+ GOLD', 'FUENTES', false,'./media/productos/fuente_coolermaster_800w.jpg', 22186)
const producto11 = new Producto('FUENTE CYLON 600W 80+ BRONZE', 'FUENTES', true,'./media/productos/fuente_cylon_600w.jpg', 10200)
const producto12 = new Producto('FUENTE EVGA 500W 80+ WHITE', 'FUENTES', false,'./media/productos/fuente_evga_500w.jpg', 8887)
const producto13 = new Producto('FUENTE GIGABYTE 1000W 80+ GOLD', 'FUENTES', false,'./media/productos/fuente_gigabyte_1000w.jpg', 29990)
const producto14 = new Producto('GABINETE AEROCOOL BIONIC', 'GABINETES', false,'./media/productos/gabinete_aerocool_bionic.jpg', 9128)
const producto15 = new Producto('GABINETE AEROCOOL FALCON', 'GABINETES', true,'./media/productos/gabinete_aerocool_falcon.jpg', 14990)
const producto16 = new Producto('GABINETE Deepcool MATREXX', 'GABINETES', false,'./media/productos/gabinete_deepcool_matrexx.jpg', 22300)
const producto17 = new Producto('GABINETE KOLINK INSPIRE', 'GABINETES', false,'./media/productos/gabinete_kolink_inspire.jpg', 8450)
const producto18 = new Producto('HDD SEAGATE BARRACUDA 1TB', 'HDD', false,'./media/productos/hdd_seagate_barracuda_1tb.jpg', 7400)
const producto19 = new Producto('HDD WESTERN DIGITAL BLUE 1TB', 'HDD', false,'./media/productos/hdd_wd_blue_1tb.jpg', 7400)
const producto20 = new Producto('PROCESADOR INTEL CORE I7 12700F', 'PROCESADORES', false,'./media/productos/intel_I7_12700f.jpg', 71599)
const producto21 = new Producto('PROCESADOR INTEL CORE I9 12900K', 'PROCESADORES', false,'./media/productos/intel_I9_12900k.jpg', 117104)
const producto22 = new Producto('MOTHERBOARD ASUS A320', 'MOTHERBOARDS', false,'./media/productos/mother_asus_a320.jpg', 9450)
const producto23 = new Producto('MOTHERBOARD ASUS B450', 'MOTHERBOARDS', false,'./media/productos/mother_asus_b450.jpg', 23073)
const producto24 = new Producto('MOTHERBOARD GIGABYTE B550', 'MOTHERBOARDS', false,'./media/productos/mother_gigabyte_b550.jpg', 31300)
const producto25 = new Producto('MOTHERBOARD GIGABYTE B660', 'MOTHERBOARDS', false,'./media/productos/mother_gigabyte_b660.jpg', 7300)
const producto26 = new Producto('PLACA DE VIDEO GIGABYTE RTX 3060', 'PLACAS DE VIDEO', false,'./media/productos/placa_de_video_rtx_3060.jpg', 104995)
const producto27 = new Producto('PLACA DE VIDEO MSI RTX 3070', 'PLACAS DE VIDEO', false,'./media/productos/placa_de_video_rtx_3070.jpg', 135999)
const producto28 = new Producto('PLACA DE VIDEO ZOTAC RTX 3080', 'PLACAS DE VIDEO', true,'./media/productos/placa_de_video_rtx_3080.jpg', 175000)
const producto29 = new Producto('PLACA DE VIDEO EVGA RTX 3090', 'PLACAS DE VIDEO', false,'./media/productos/placa_de_video_rtx_3090.jpg', 308000)
const producto30 = new Producto('PLACA DE VIDEO MSI RX 6700XT', 'PLACAS DE VIDEO', false,'./media/productos/placa_de_video_rx_6700xt.jpg', 105392)
const producto31 = new Producto('PLACA DE VIDEO GIGABYTE RX 6900XT', 'PLACAS DE VIDEO', false,'./media/productos/placa_de_video_rx_6900xt.jpg', 245990)
const producto32 = new Producto('MEMORIA RAM ADATA 8GB 3200MHZ', 'MEMORIAS RAM', false,'./media/productos/ram_adata_8gb.jpg', 7423)
const producto33 = new Producto('MEMORIA RAM CORSAIR 8GB 3200MHZ', 'MEMORIAS RAM', false,'./media/productos/ram_corsair_8gb.jpg', 7305)
const producto34 = new Producto('MEMORIA RAM CORSAIR 16GB 3600MHZ', 'MEMORIAS RAM', true,'./media/productos/ram_corsair_16gb.jpg', 14764)
const producto35 = new Producto('MEMORIA RAM HYPERX 8GB 3200MHZ', 'MEMORIAS RAM', false,'./media/productos/ram_hyperx_8gb.jpg', 7300)
const producto36 = new Producto('MEMORIA RAM HYPERX 16GB 3200MHZ', 'MEMORIAS RAM', false,'./media/productos/ram_hyperx_16gb.jpg', 15665)
const producto37 = new Producto('PROCESADOR RYZEN 5 5600X', 'PROCESADORES', false,'./media/productos/ryzen_5_5600x.jpg', 43899)
const producto38 = new Producto('PROCESADOR RYZEN 9 5900X', 'PROCESADORES', false,'./media/productos/ryzen_9_5900x.jpg', 86999)
const producto39 = new Producto('SSD ADATA 240GB', 'SSD', false,'./media/productos/ssd_adata_240gb.jpg', 5699)
const producto40 = new Producto('SSD GIGABYTE 120GB', 'SSD', false,'./media/productos/ssd_gigabyte_120gb.jpg', 3360)
const producto41 = new Producto('SSD KINGSTON 240GB', 'SSD', false,'./media/productos/ssd_kingston_240gb.jpg', 5480)
const producto42 = new Producto('SSD NVME CORSAIR 480GB', 'SSD', true,'./media/productos/ssd_nvme_corsair_480gb.jpg', 14666)
const producto43 = new Producto('SSD NVME KINGSTON 1TB', 'SSD', false,'./media/productos/ssd_nvme_kingston_1tb.jpg', 19499)
const producto44 = new Producto('SSD WESTERN DIGITAL GREEN 480GB', 'SSD', false,'./media/productos/ssd_wd_green_480gb.jpg', 8600)