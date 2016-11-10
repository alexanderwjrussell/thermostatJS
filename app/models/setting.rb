class Setting

  include DataMapper::Resource

  property :id, Serial
  property(:temperature, String)
  property(:powersaving, String)
  property :city, String

end

DataMapper.setup(:default, "postgres://localhost/thermostat_development")
DataMapper.finalize
DataMapper.auto_upgrade!
