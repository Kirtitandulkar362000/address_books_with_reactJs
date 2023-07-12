class Api::V1::AddressbooksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @addresses = Address.all
    render json: @addresses
  end

  def create
    @address = Address.new(address_params)
    if @address.save
      render json: { data: @address, status: 'success' }, status: :ok
    else
      render json: @address.errors, status: :unprocessable_entity
    end
  end
  

  def show
  end

  def destroy
    @address = Address.find_by(id: params[:id])
    if @address
      @address.destroy
      head :no_content
    else
      render json: { error: "Address not found" }, status: :not_found
    end
  end

  private

  def address_params
    params.require(:address).permit(:name, :age, :gender, :address, :contact_number)
  end
end
