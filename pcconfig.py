"""Pynecone configuration."""
import pynecone as pc

config = pc.Config(
    app_name="pynecone_website",
    frontend_packages=[
        "rehype-raw",
    ],
    env=pc.Env.DEV,
)
