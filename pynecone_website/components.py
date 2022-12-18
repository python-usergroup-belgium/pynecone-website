"""General app components."""
import pynecone as pc

# def menu():
#     return pc.box(pc.desktop_only(.menu_button())


def navbar() -> pc.Component:
    """App navbar."""
    return pc.box(
        pc.hstack(
            pc.link(
                pc.hstack(pc.image(src="favicon.ico"), pc.heading("PUG BE")), href="/"
            ),
            pc.desktop_only(
                pc.breadcrumb(
                    pc.breadcrumb_item(
                        pc.breadcrumb_link(pc.heading("Home", size="md"), href="#")
                    ),
                    pc.breadcrumb_item(
                        pc.breadcrumb_link(pc.heading("Docs", size="md"), href="#")
                    ),
                    pc.breadcrumb_item(
                        pc.breadcrumb_link(pc.heading("Link", size="md"), href="#")
                    ),
                    separator="|",
                    color="rgb(107,99,246)",
                )
            ),
            pc.mobile_and_tablet(
                pc.menu(
                    pc.menu_button(
                        pc.icon(
                            tag="HamburgerIcon",
                        ),
                    ),
                    pc.menu_list(
                        pc.link(
                            pc.menu_item("About GPT"), href="https://openai.com/api/"
                        ),
                        pc.link(
                            pc.menu_item("Sign Out"), href="https://openai.com/api/"
                        ),
                        pc.menu_divider(),
                        pc.link(
                            pc.menu_item("About GPT"), href="https://openai.com/api/"
                        ),
                        pc.link(
                            pc.menu_item("Sign Out"), href="https://openai.com/api/"
                        ),
                    ),
                )
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
        pc.text("Python User Group Belgium", font_size="1.5em", as_="b"),
        width="100%",
        padding_y=6,
        z_index="500",
        background="gray",
    )
