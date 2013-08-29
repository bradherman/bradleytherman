class ApiController < ApplicationController
  def index
    respond_to do |format|
      @me = MeBuilder.new.build
      format.html { @json = JSON.pretty_generate @me }
      format.json { render  json: @me }
      format.xml  { render  xml:  @me }
    end
  end
end