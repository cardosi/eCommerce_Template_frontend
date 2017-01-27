A User(shopper) and a Transaction(cart?) :
* A user will have one Transaction open and A Transaction will have only one user

* A user wants to see all past Transactions? if so, its a one - to - many
//I think this will just be up to us since we are the backend devs right meow

A User and Products :
* A user will have many products and a product will have many users until qty = 0
    # this is a many - to - many relationship

A Product and a Transaction :
* A product will have many Transactions until qty = 0 and a Transaction will have many products.
    # this is a many - to - many relationship

User params :
-username
-password
-email
-name
-address
-user_id

Product params :
-description
-price
-quantity (qty) //in stock/inventory
-product_id

Transaction params :
-user, foreign_key
-product, foreign_key
-quantity(qty) // products in cart/Transaction

user.rb :
class User < ApplicationRecord
belongs_to :transaction (unless we want the history accessable, then has_many)
has_many :products, through: :transactions
end

product.rb :
class Product < ApplicationRecord
has_many :transactions
has_many :users, through: :transactions
end

transaction.rb :
class Transaction < ApplicationRecord
belongs_to :user
belongs_to :product

validates_uniqueness_of :user_id, scope: :product_id // need unique user but not products
end
