"""Index page."""

import pynecone as pc
from pynecone import Component

from pcconfig import config
from pynecone_website.components import navbar

docs_url = "https://pynecone.io/docs/getting-started/introduction"
filename = f"{config.app_name}/{config.app_name}.py"


class State(pc.State):
    """The app state."""


def index() -> Component:
    """Index page for website."""
    return pc.box(
        navbar(State),
        pc.vstack(
            pc.center(
                pc.vstack(
                    pc.heading(
                        "Python user group ",
                        pc.text(
                            "Belgium!",
                            background_image=(
                                "linear-gradient(271.68deg, #EE756A 0.75%,"
                                " #756AEE 88.52%)"
                            ),
                            background_clip="text",
                            font_weight="bold",
                        ),
                        font_size="2em",
                    ),
                    pc.box(
                        "Get started by editing ", pc.code(filename, font_size="1em")
                    ),
                    pc.link(
                        "Check out our docs!",
                        href=docs_url,
                        border="0.1em solid",
                        padding="0.5em",
                        border_radius="0.5em",
                        _hover={
                            "color": "rgb(107,99,246)",
                        },
                    ),
                    spacing="1.5em",
                    font_size="2em",
                ),
                padding_top="10%",
                background=(
                    "radial-gradient(circle at 22% 11%,rgba(62, 180, 137,.20),"
                    "hsla(0,0%,100%,0) 19%),radial-gradient(circle at 82% 25%,"
                    "rgba(33,150,243,.18),hsla(0,0%,100%,0) 35%),"
                    "radial-gradient(circle at 25% 61%,rgba(250, 128, 114, .28),"
                    "hsla(0,0%,100%,0) 55%)"
                ),
            ),
        ),
        position="relative",
    )
