Databazadagi struktura - Bellissimo Pizza Clone

items
	id: int
	type - pitsalar, salatlar, desertlar, zakuski, ichimliklar
	is_deleted: boolean

item_sizes
	id: int
	item_id: int
	price: double
	size: string
	photo: string
        created_at: date
	updated_at: date
	is_deleted: boolean

clients
	id: int
	phone_number: number
	first_name: string
	last_name: string
	password: string
	created_at: date
	updated_at: date

users
	id: int
	first_name: string
	last_name: string
	username: string
	password: string
	created_at: date
	updated_at: date
	is_deleted: boolean

orders
	id: int
	client_id: int
	total_price: double
	is_paid: boolean
	status: - preparing, prepared, completed

order_items
	id: int
	item_id: int
	size_id: int
	quantity: int
	sub_total_price: double
}

GraphQL schema
CRUD - qilish kerak.

type Item {
	id: ID!
	type: String
	sizes: [ItemSize!]!
}

type ItemSize {
	id: ID!
	item: Item!
	price: Float
	size: String
	photo: String
	created_at: String
	updated_at: String
}

type Client {
	id: ID!
	phone_number: Int!
	first_name: String
	last_name: String
	created_at: String
	updated_at: String
}

type User {
	id: ID!
	first_name: String
	last_name: String
	username: String
	created_at: String
	updated_at: String
}

type Order {
	id: ID!
	client: Client!
	total_price: Float!
	is_paid: Boolean!
	status: String
	items: [OrderItem!]!
}

type OrderItem {
	id: ID!
	item: Item!
	size: ItemSize!
	quantity: Int
	sub_total_price: Float
}