require 'sinatra/base'
require 'data_mapper'
require 'json'
require_relative 'models/setting'

class Thermostat < Sinatra::Base

  get '/blahblah' do
    headers 'Access-Control-Allow-Origin' => '*'
    settings = Setting.last
    { city: settings.city,
      temperature: settings.temperature,
      powersaving: settings.powersaving
    }.to_json
  end

  post '/settings' do
    Setting.all.destroy
    setting = Setting.create(city: params[:city],
                          temperature: params[:temperature],
                          powersaving: params[:powersaving])
  end

  run! if app_file == $0

end
