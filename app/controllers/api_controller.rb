class ApiController < ApplicationController
  def index
    respond_to do |format|
      @json = MeBuilder.new.build
      format.html { @json = JSON.pretty_generate @json }
      format.json { render  json: @json }
    end
  end
end