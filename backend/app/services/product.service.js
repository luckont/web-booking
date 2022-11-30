const { ObjectId } = require("mongodb");

class ProductService {
    constructor(client) {
        this.Product = client.db().collection("products");
    }
    // Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API

    extractProductData(payload) {
        const product = {
            name: payload.name,
            address: payload.address,
            image: payload.image,
            description: payload.description,
            phone: payload.phone,
            price: payload.price,
        };
        // Remove undefined fields
        Object.keys(product).forEach(
            (key) => product[key] === undefined && delete product[key]
        );

        return product;
    }

    async create(payload) {
        const product = this.extractProductData(payload);
        const result = await this.Product.findOneAndUpdate(
            product,
            { $set: { status: product.status === true } },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.Product.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({
            name: { $regex: new RegExp(name), $options: "i" },
        });
    }

    async findById(id) {
        return await this.Product.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractProductData(payload);
        const result = await this.Product.findOneAndUpdate(
            filter, {
                $set: update
            }, {
                returnDocument: "after"
            }
        );
        return result.value;
    }

    async delete(id) {
        const result = await this.Product.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        }); 
        return result.value;
    }

    async findStatus() {
        return await this.find({ status: true });
    }

    async deleteAll() {
        const result = await this.Product.deleteMany({});
        return result.deletedCount;
    }
}

module.exports = ProductService;