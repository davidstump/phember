defmodule PhemberBackend.Router do
  use PhemberBackend.Web, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", PhemberBackend do
    pipe_through :api

    resources "/posts", PostController
  end

  # Other scopes may use custom stacks.
  # scope "/api", PhemberBackend do
  #   pipe_through :api
  # end
end
