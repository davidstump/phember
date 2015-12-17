defmodule PhemberBackend.PageController do
  use PhemberBackend.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
