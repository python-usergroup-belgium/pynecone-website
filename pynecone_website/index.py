"""Index page."""

import pynecone as pc
from pynecone import Component

from pcconfig import config
from pynecone_website.components import footer, navbar

docs_url = "https://pynecone.io/docs/getting-started/introduction"
filename = f"{config.app_name}/{config.app_name}.py"


class State(pc.State):
    """The app state."""


def landing() -> Component:
    """Landing component for website."""
    return pc.center(
        pc.vstack(
            pc.heading(
                "Python User Group ",
                pc.text(
                    "Belgium",
                    background_image=(
                        "linear-gradient(271.68deg, #EE756A 0.75%, #756AEE 88.52%)"
                    ),
                    background_clip="text",
                ),
                font_size="2em",
                padding_x=8,
            ),
            pc.link(
                "Check out our events!",
                href="https://www.meetup.com/python-user-group-belgium/events/",
                padding="0.5em",
                box_shadow="rgba(151, 65, 252, 0.8) 0 15px 30px -10px",
                background_image="linear-gradient(144deg,#AF40FF,#5B42F3 50%,#00DDEB)",
                border_radius="1em",
                color="white",
                _hover={
                    "opacity": 0.85,
                },
            ),
            spacing="1.5em",
            font_size="2em",
        ),
        padding_top=48,
        padding_bottom=32,
        background=(
            "radial-gradient(circle at 22% 11%,rgba(62, 180, 137,.20),"
            "hsla(0,0%,100%,0) 19%),radial-gradient(circle at 82% 25%,"
            "rgba(33,150,243,.18),hsla(0,0%,100%,0) 35%),"
            "radial-gradient(circle at 25% 61%,rgba(250, 128, 114, .28),"
            "hsla(0,0%,100%,0) 55%)",
        ),
        width="100%",
    )


def about() -> Component:
    """About section."""
    return pc.box(
        pc.markdown(
            """## What we're about

The Python User Group in Belgium is a community of Python enthusiasts who come together\
 to learn, share, and discuss all things Python. Members of the group range from\
 beginner to advanced levels, and everyone is welcome to join. The group meets on a\
 regular basis to learn from presentations and workshops, share their own experiences\
 and projects, and network with other members. In the future, the group might also host\
 regular events such as hackathons and coding competitions, to promote Python and its\
 uses. Whether you are a seasoned developer or just starting out with Python, the\
 Python User Group in Belgium is the place to be for anyone interested in the language.

The focus is on knowledge sharing and community building, commercial intents are\
 frowned upon. All events are entirely free-of-charge.""",
        ),
        width="70%",
        padding_y=32,
        font_size=26,
    )


def index() -> Component:
    """Index page for website."""
    return pc.box(
        navbar(),
        pc.vstack(landing(), about(), footer()),
        position="relative",
    )
