class ApiController < ApplicationController
  include ActionView::Helpers::DateHelper

  def index
    respond_to do |format|
      age  = distance_of_time_in_words_hash(
        Time.now, Time.parse('1986-05-06'))[:years]
      @me   = MeBuilder.new(age).build
      format.html { @json = JSON.pretty_generate @me }
      format.json { render  json: @me }
      format.xml  { render  xml:  @me }
    end
  end
end