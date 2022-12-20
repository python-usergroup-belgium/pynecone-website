"""General app components."""
import pynecone as pc


def navbar() -> pc.Component:
    """App navbar."""
    return pc.box(
        pc.hstack(
            pc.link(
                pc.hstack(
                    pc.image(src="logo.png", height="3em"), pc.heading("Python UG BE")
                ),
                href="/",
            ),
            pc.hstack(
                pc.link(
                    pc.image(
                        src=(
                            "https://upload.wikimedia.org/wikipedia/commons/6/6b/"
                            "Meetup_Logo.png"
                        ),
                        height="3em",
                    ),
                    href="https://www.meetup.com/python-user-group-belgium/",
                ),
                pc.link(
                    pc.image(
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png",
                        height="3em",
                    ),
                    href="https://github.com/python-usergroup-belgium",
                ),
            ),
            justify="space-between",
            border_bottom="0.2em solid #F0F0F0",
            padding_x="2em",
            padding_y="1em",
            bg="rgba(255,255,255, 0.90)",
        ),
        position="fixed",
        width="100%",
        top="0px",
        z_index="500",
    )


def footer() -> pc.Component:
    """App footer."""
    return pc.center(
        pc.text(
            "Built with ❤️, powered by",
            pc.image(
                src=(
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/"
                    "Python_logo_01.svg/600px-Python_logo_01.svg.png"
                ),
                height="1.5em",
            ),
            "+",
            pc.image(src="https://pynecone.io/logo.png", height="1.5em"),
            as_="b",
            color="rgb(237 233 254)",
            display="flex",
        ),
        font_size="1.5em",
        width="100%",
        max_height=12,
        padding_y=2,
        z_index="500",
        background="gray",
    )
