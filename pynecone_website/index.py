"""Index page."""
from pathlib import Path
from typing import List, Self

import pynecone as pc
from pynecone import Component, Markdown, utils
from pynecone.components.component import ImportDict
from pynecone.var import BaseVar
from rich.markup import Tag

from pynecone_website.components import footer, navbar

profile_dirpath = Path(__file__).parents[1] / "gh_profile" / "profile"


class RehypeRawMarkdown(Markdown):
    """Markdown component with `rehypeRaw` - markdown comments are not shown."""

    def _get_imports(self: Self) -> ImportDict:
        """Add `rehypeRaw`, `UnorderedList` and `ListItem` to imports."""
        imports = super()._get_imports()
        imports["@chakra-ui/react"] = {
            "Heading",
            "Code",
            "Text",
            "Link",
            "UnorderedList",
            "ListItem",
        }
        imports["rehype-raw"] = {"rehypeRaw"}
        return imports

    def _render(self: Self) -> Tag:
        """Render with `rehypeRaw` component - markdown comments are hidden."""
        tag = super()._render()
        return tag.add_props(
            children=utils.wrap(str(self.src).strip(), "`"),
            components={
                "h1": "{({node, ...props}) => <Heading size='2xl' {...props} />}",
                "h2": "{({node, ...props}) => <Heading size='xl' {...props} />}",
                "h3": "{({node, ...props}) => <Heading size='lg' {...props} />}",
                "p": "{Text}",
                "a": "{Link}",
                "ul": "{UnorderedList}",
                "li": "{ListItem}",
                # "code": "{Code}"
                "code": """{({node, inline, className, children, ...props}) =>
                    {
        const match = (className || '').match(/language-(?<lang>.*)/);
        return !inline ? (
          <Prism
            children={String(children).replace(/\n$/, '')}
            language={match ? match[1] : ''}
            {...props}
          />
        ) : (
          <Code {...props}>
            {children}
          </Code>
        );
      }}""".replace(
                    "\n", " "
                ),
            },
            remark_plugins=BaseVar(name="[remarkMath, remarkGfm]", type_=List[str]),
            rehype_plugins=BaseVar(name="[rehypeKatex, rehypeRaw]", type_=List[str]),
            src="",
        )


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
                        "linear-gradient(271.68deg, #beee6a 0.75%, #e02b1b 88.52%)"
                    ),
                    background_clip="text",
                ),
                font_size="2em",
                padding_x=8,
                color="white",
            ),
            pc.link(
                "Check out our events!",
                href="https://www.meetup.com/python-user-group-belgium/events/",
                padding="0.5em",
                box_shadow="rgba(235, 80, 63, 0.8) 0 15px 30px -10px",
                background_image="linear-gradient(144deg,#d90909,#eb3f3f 50%,#ebb73f)",
                border_radius="1em",
                color="white",
                _hover={
                    "opacity": 0.85,
                },
            ),
            spacing="1.5em",
            font_size="2em",
        ),
        padding_top=60,
        padding_bottom=48,
        background="url('blob.jpg')",
        background_size="cover",
        width="100%",
    )


def about() -> Component:
    """About section."""
    return pc.box(
        RehypeRawMarkdown.create(
            (profile_dirpath / "README.md").read_text(),
            padding_bottom="0.5rem",
        ),
        white_space="pre-line",
        width="60%",
        padding_y=32,
        font_size=24,
    )


def index() -> Component:
    """Index page for website."""
    return pc.box(
        navbar(),
        pc.vstack(landing(), about(), footer()),
        position="relative",
    )
