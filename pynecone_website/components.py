"""General app components."""
import pynecone as pc

# def menu():
#     return pc.box(pc.desktop_only(.menu_button())


def navbar(State: pc.State) -> pc.Component:
    """App navbar."""
    return pc.box(
        pc.hstack(
            pc.link(
                pc.hstack(pc.image(src="favicon.ico"), pc.heading("GPT Demo")), href="/"
            ),
            pc.menu(
                pc.menu_button(
                    pc.mobile_and_tablet(
                        pc.icon(
                            tag="HamburgerIcon",
                        )
                    )
                ),
                pc.menu_list(
                    pc.link(pc.menu_item("About GPT"), href="https://openai.com/api/"),
                    pc.link(pc.menu_item("Sign Out"), href="https://openai.com/api/"),
                    pc.menu_divider(),
                    pc.link(pc.menu_item("About GPT"), href="https://openai.com/api/"),
                    pc.link(pc.menu_item("Sign Out"), href="https://openai.com/api/"),
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
