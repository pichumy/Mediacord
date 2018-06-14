class Api::SearchesController < ApplicationController
  def servers
    name = params[:server][:name]
    query = "%" + name.split("").join("%") + "%"
    @servers = Server.where('lower(name) LIKE ?', query).limit(10)

    render '/api/servers/index'
  end

  def users
    name = params[:user][:name]
    query = "%" + name.split("").join("%") + "%"
    @users = User.where('lower(username) LIKE ?', query).limit(10)

    render '/api/users/index'
  end


end
