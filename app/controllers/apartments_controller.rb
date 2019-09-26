class ApartmentsController < ApplicationController
    
    def index
        apartments = Apartment.all
        render json: apartments
    end
        
    def create
      apartment = Apartment.create(apt_params)
      if apartment.valid?
        render json: apartment
       else
         render json: apartment.errors, status: :unprocessable_entity
       end
    end
    
    
    private
    
    def api_params
        params.require(:apartments).permit(:address, :city, :state)
    end
    
end
