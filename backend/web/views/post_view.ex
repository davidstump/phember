defmodule PhemberBackend.PostView do
  use PhemberBackend.Web, :view

  def render("index.json", %{posts: posts}) do
    %{posts: render_many(posts, PhemberBackend.PostView, "post.json")}
  end

  def render("show.json", %{post: post}) do
    %{posts: render_one(post, PhemberBackend.PostView, "post.json")}
  end

  def render("post.json", %{post: post}) do
    %{id: post.id,
      title: post.title,
      body: post.body}
  end
end
