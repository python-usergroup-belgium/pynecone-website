"""Events page."""
import pynecone as pc
from pynecone import Component

from pynecone_website.components import footer, navbar
from pynecone_website.index import landing


def sessionize() -> Component:
    """Embed Sessionize's `Session List`."""
    return pc.box(
        element="iframe",
        src="https://sessionize.com/api/v2/um0003tc/view/Sessions",
        width="100%",
        height="600px",
    )


def events() -> Component:
    """Index page for website."""
    return pc.box(
        navbar(),
        pc.vstack(landing(), sessionize(), footer()),
        position="relative",
    )
