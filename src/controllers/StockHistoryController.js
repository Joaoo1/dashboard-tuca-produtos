import { Firestore } from '../server/firebase';
import { COL_PRODUCTS, SUBCOL_STOCK_HISTORY } from '../constants/firestore';
import { convertTimeStampToString } from '../helpers/FormatDate';

const StockHistoryController = {
  async index(productId) {
    const data = await Firestore.collection(COL_PRODUCTS)
      .doc(productId)
      .collection(SUBCOL_STOCK_HISTORY)
      .orderBy('date', 'desc')
      .get();
    const stockHistories = data.docs.map(doc => {
      const stockHistory = doc.data();
      stockHistory.id = doc.id;
      stockHistory.date = convertTimeStampToString(stockHistory.date);
      return stockHistory;
    });

    return stockHistories;
  },
  async create(product, sale) {
    const doc = await Firestore.collection(COL_PRODUCTS).doc(product.id).get();
    const { currentStock } = doc.data();

    const stockHistory = {
      date: new Date(),
      quantity: product.quantidade,
      stockChange: false,
      currentStock: currentStock - product.quantidade,
      client: sale.client,
      saleProductId: product.id,
    };

    Firestore.collection(COL_PRODUCTS)
      .doc(product.id)
      .collection(SUBCOL_STOCK_HISTORY)
      .add(stockHistory);

    doc.ref.update({ currentStock: currentStock - product.quantidade });
  },
  async update(product) {
    const doc = await Firestore.collection(COL_PRODUCTS).doc(product.id).get();
    const { currentStock } = doc.data();

    if (currentStock !== product.currentStock) {
      const stockHistory = {
        date: new Date(),
        quantity:
          Number(currentStock) > Number(product.currentStock)
            ? currentStock - product.currentStock
            : product.currentStock - currentStock,
        stockChange: true,
        currentStock: product.currentStock,
        stockAdded: currentStock < product.currentStock,
      };
      return Firestore.collection(COL_PRODUCTS)
        .doc(product.id)
        .collection(SUBCOL_STOCK_HISTORY)
        .add(stockHistory);
    }

    return new Promise().resolve();
  },
};

export default StockHistoryController;
