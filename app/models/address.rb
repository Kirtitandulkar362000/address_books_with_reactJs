class Address < ApplicationRecord
    validates :name, :age, :gender, :contact_number, :address, presence: true

end
