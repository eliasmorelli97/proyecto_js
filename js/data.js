// Datos de productos

class Producto {
    constructor(id, descripcion, categoria, destacado, imagen, precio, cantidad) {
        this.id = id
        this.descripcion = descripcion
        this.categoria = categoria
        this.destacado = destacado
        this.imagen = imagen
        this.precio = precio
        this.cantidad = cantidad
    }
}

const producto1 = new Producto('001', 'PROCESADOR RYZEN 5 5600G', 'PROCESADORES', true, './media/productos/ryzen_5_5600g.jpg', 38449, 1)
const producto2 = new Producto('002', 'PROCESADOR RYZEN 7 5700G', 'PROCESADORES', true,'./media/productos/ryzen_7_5700g.jpg', 54999, 1)
const producto3 = new Producto('003', 'PROCESADOR INTEL CORE I3 12100F', 'PROCESADORES', false,'./media/productos/intel_i3_12100f.jpg', 20200, 1)
const producto4 = new Producto('004', 'PROCESADOR INTEL CORE I5 12400F', 'PROCESADORES', true,'./media/productos/intel_i5_12400f.jpg', 42990, 1)
const producto5 = new Producto('005', 'MOTHERBOARD ASUS A520', 'MOTHERBOARDS', false,'./media/productos/mother_asus_a520.jpg', 12830, 1)
const producto6 = new Producto('006', 'MOTHERBOARD GIGABYTE H610', 'MOTHERBOARDS', false,'./media/productos/mother_gigabyte_h610.jpg', 20782, 1)
const producto7 = new Producto('007', 'PLACA DE VIDEO ASUS GTX 1650', 'PLACAS DE VIDEO', false,'./media/productos/placa_de_video_gtx_1650.jpg', 52272, 1)
const producto8 = new Producto('008', 'PLACA DE VIDEO RX 6500XT', 'PLACAS DE VIDEO', true,'./media/productos/placa_de_video_rx_6500xt.jpg', 59850, 1)
const producto9 = new Producto('009', 'PROCESADOR ATHLON 3000G', 'PROCESADORES', false,'./media/productos/athlon_3000g.jpg', 19189, 1)
const producto10 = new Producto('010', 'FUENTE COOLERMASTER 800W 80+ GOLD', 'FUENTES', false,'./media/productos/fuente_coolermaster_800w.jpg', 22186, 1)
const producto11 = new Producto('011', 'FUENTE CYLON 600W 80+ BRONZE', 'FUENTES', true,'./media/productos/fuente_cylon_600w.jpg', 10200, 1)
const producto12 = new Producto('012', 'FUENTE EVGA 500W 80+ WHITE', 'FUENTES', false,'./media/productos/fuente_evga_500w.jpg', 8887, 1)
const producto13 = new Producto('013', 'FUENTE GIGABYTE 1000W 80+ GOLD', 'FUENTES', false,'./media/productos/fuente_gigabyte_1000w.jpg', 29990, 1)
const producto14 = new Producto('014', 'GABINETE AEROCOOL BIONIC', 'GABINETES', false,'./media/productos/gabinete_aerocool_bionic.jpg', 9128, 1)
const producto15 = new Producto('015', 'GABINETE AEROCOOL FALCON', 'GABINETES', true,'./media/productos/gabinete_aerocool_falcon.jpg', 14990, 1)
const producto16 = new Producto('016', 'GABINETE Deepcool MATREXX', 'GABINETES', false,'./media/productos/gabinete_deepcool_matrexx.jpg', 22300, 1)
const producto17 = new Producto('017', 'GABINETE KOLINK INSPIRE', 'GABINETES', false,'./media/productos/gabinete_kolink_inspire.jpg', 8450, 1)
const producto18 = new Producto('018', 'HDD SEAGATE BARRACUDA 1TB', 'HDD', false,'./media/productos/hdd_seagate_barracuda_1tb.jpg', 7400, 1)
const producto19 = new Producto('019', 'HDD WESTERN DIGITAL BLUE 1TB', 'HDD', false,'./media/productos/hdd_wd_blue_1tb.jpg', 7400, 1)
const producto20 = new Producto('020', 'PROCESADOR INTEL CORE I7 12700F', 'PROCESADORES', false,'./media/productos/intel_i7_12700f.jpg', 71599, 1)
const producto21 = new Producto('021', 'PROCESADOR INTEL CORE I9 12900K', 'PROCESADORES', false,'./media/productos/intel_i9_12900k.jpg', 117104, 1)
const producto22 = new Producto('022', 'MOTHERBOARD ASUS A320', 'MOTHERBOARDS', false,'./media/productos/mother_asus_a320.jpg', 9450, 1)
const producto24 = new Producto('023', 'MOTHERBOARD GIGABYTE B550', 'MOTHERBOARDS', false,'./media/productos/mother_gigabyte_b550.jpg', 31300, 1)
const producto23 = new Producto('024', 'MOTHERBOARD ASUS B450', 'MOTHERBOARDS', false,'./media/productos/mother_asus_b450.jpg', 23073, 1)
const producto25 = new Producto('025', 'MOTHERBOARD GIGABYTE B660', 'MOTHERBOARDS', false,'./media/productos/mother_gigabyte_b660.jpg', 46999, 1)
const producto26 = new Producto('026', 'PLACA DE VIDEO GIGABYTE RTX 3060', 'PLACAS DE VIDEO', false,'./media/productos/placa_de_video_rtx_3060.jpg', 104995, 1)
const producto27 = new Producto('027', 'PLACA DE VIDEO MSI RTX 3070', 'PLACAS DE VIDEO', false,'./media/productos/placa_de_video_rtx_3070.jpg', 135999, 1)
const producto28 = new Producto('028', 'PLACA DE VIDEO ZOTAC RTX 3080', 'PLACAS DE VIDEO', true,'./media/productos/placa_de_video_rtx_3080.jpg', 175000, 1)
const producto29 = new Producto('029', 'PLACA DE VIDEO EVGA RTX 3090', 'PLACAS DE VIDEO', false,'./media/productos/placa_de_video_rtx_3090.jpg', 308000, 1)
const producto30 = new Producto('030', 'PLACA DE VIDEO MSI RX 6700XT', 'PLACAS DE VIDEO', false,'./media/productos/placa_de_video_rx_6700xt.jpg', 105392, 1)
const producto31 = new Producto('031', 'PLACA DE VIDEO GIGABYTE RX 6900XT', 'PLACAS DE VIDEO', false,'./media/productos/placa_de_video_rx_6900xt.jpg', 245990, 1)
const producto32 = new Producto('032', 'MEMORIA RAM ADATA 8GB 3200MHZ', 'MEMORIAS RAM', false,'./media/productos/ram_adata_8gb.jpg', 7423, 1)
const producto33 = new Producto('033', 'MEMORIA RAM CORSAIR 8GB 3200MHZ', 'MEMORIAS RAM', false,'./media/productos/ram_corsair_8gb.jpg', 7305, 1)
const producto34 = new Producto('034', 'MEMORIA RAM CORSAIR 16GB 3600MHZ', 'MEMORIAS RAM', true,'./media/productos/ram_corsair_16gb.jpg', 14764, 1)
const producto35 = new Producto('035', 'MEMORIA RAM HYPERX 8GB 3200MHZ', 'MEMORIAS RAM', false,'./media/productos/ram_hyperx_8gb.jpg', 7300, 1)
const producto36 = new Producto('036', 'MEMORIA RAM HYPERX 16GB 3200MHZ', 'MEMORIAS RAM', false,'./media/productos/ram_hyperx_16gb.jpg', 15665, 1)
const producto37 = new Producto('037', 'PROCESADOR RYZEN 5 5600X', 'PROCESADORES', false,'./media/productos/ryzen_5_5600x.jpg', 43899, 1)
const producto38 = new Producto('038', 'PROCESADOR RYZEN 9 5900X', 'PROCESADORES', false,'./media/productos/ryzen_9_5900x.jpg', 86999, 1)
const producto39 = new Producto('039', 'SSD ADATA 240GB', 'SSD', false,'./media/productos/ssd_adata_240gb.jpg', 5699, 1)
const producto40 = new Producto('040', 'SSD GIGABYTE 120GB', 'SSD', false,'./media/productos/ssd_gigabyte_120gb.jpg', 3360, 1)
const producto41 = new Producto('041', 'SSD KINGSTON 240GB', 'SSD', false,'./media/productos/ssd_kingston_240gb.jpg', 5480, 1)
const producto42 = new Producto('042', 'SSD NVME CORSAIR 480GB', 'SSD', true,'./media/productos/ssd_nvme_corsair_480gb.jpg', 14666, 1)
const producto43 = new Producto('043', 'SSD NVME KINGSTON 1TB', 'SSD', false,'./media/productos/ssd_nvme_kingston_1tb.jpg', 19499, 1)
const producto44 = new Producto('044', 'SSD WESTERN DIGITAL GREEN 480GB', 'SSD', false,'./media/productos/ssd_wd_green_480gb.jpg', 8600, 1)

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20, producto21, producto22, producto23, producto24, producto25, producto26, producto27, producto28, producto29, producto30, producto31, producto32, producto33, producto34, producto35, producto36, producto37, producto38, producto39, producto40, producto41, producto42, producto43, producto44]