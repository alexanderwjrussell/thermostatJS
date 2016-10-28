require 'sinatra/base'
require 'data_mapper'
require_relative 'models/setting'

class Thermostat < Sinatra::Base

  get '/' do
    setting = Setting.last

    erb :'index'
  end

  post '/save' do
    puts params.inspect
    setting = Setting.new(city: params[:city],
                          temperature: params[:temperature],
                          powersaving: params[:powersaving])
    setting.save
    redirect "/"
  end

  run! if app_file == $0

end
